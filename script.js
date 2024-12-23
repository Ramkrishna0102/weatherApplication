async function weatherfeth(city){

const apikey = '8f2f0ae201b3a82ebc81c2903baf6b22';

const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

try{

    const response = await fetch(url);

    if(!response.ok){
        throw new Error('city not present in my database');
    }
    const data = await response.json();
    displayWeather(data); // displ the featch data


}catch(error){
    document.getElementById('weatherInfo').innerHTML = `<p>${error.message}</p>`;
}

}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const { name, main: { temp }, weather } = data; // Destructuring

    weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${temp}°C</p>
        <p>Condition: ${weather[0].description}</p>
    `;
}


// add event listner to the button

document.getElementById('searchbtn').addEventListener('click' , ()=>{

    const city = document.getElementById('cityinput').value;
    if(city){
        weatherfeth(city);
    }
    else{
        alert('please write city name');
    }

});