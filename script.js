APIKEY = 'cf328f6db8d6495b8a9141704242303'


// API = `https://api.weatherapi.com/v1/current.json?key=c4b469446da64a62a7455412241903&q=London&aqi=yes`
// referencing output fields
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');


//referencing output fields
const cityName = document.getElementById('city-name');
const countryName = document.getElementById('countryName')
const localTime= document.getElementById('loc-time');
const temp = document.getElementById('temp')
const sup = document.getElementById('sup')


//getting data from api
async function getData(KEY, cityName){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${cityName}&aqi=yes`);
    return await promise.json();
}
//show output
searchBtn.addEventListener('click', async (e)=>{
    e.preventDefault()
    const input = cityInput.value;
    document.getElementById('outputCard').style.visibility ='visible';
    const result = await getData( APIKEY,input);
    cityName.innerText =  ` ${result.location.name}, ${result.location.region}`
    countryName.innerText = `${result.location.country}`
    temp.innerText = `${result.current.temp_c}`
    sup.innerText = '°C'
    localTime.innerText = `${result.location.localtime}`;
    

})

