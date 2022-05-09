
function forcast(){

const city_name = document.getElementById("addcity").value
const API_KEY = "dd9a3565602c437d9dd68c5e4f065470"
let URL = `https://api.opencagedata.com/geocode/v1/json?q=${city_name}&key=${API_KEY}&language=fr&pretty=1`


fetch(URL) // on utilise la methode fetch, qui est asynchrone et qui existe par défaut dans le navigateur (on aurait aussi pu utiliser la librairie axios par exemple)
// on utilise la méthode then() (NB: on pourrait aussi utiliser la syntaxe async/await)
.then(response => { 
    if (response.status == 200) { // on vérifier que l'appel à l'API a fonctionné
        return response.json()  // ne pas oublier le return du callback
    }
    else console.log(`Erreur lorsqu'on a tenté de récupérer les data`);
})
.then(data => { // On recupère ici les coordonnées de la ville recherchée
    const latitude = data.results[0].geometry.lat;
    const longitude = data.results[0].geometry.lng;

    console.log(`Latitude de ${city_name} : ${latitude}`)
    console.log(`Longitude de ${city_name} : ${longitude}`)

// On utlise les coordonnées de la ville pour réaliser le call API vers openweather

    const API_KEYB = "104bf1cd8898dd5511abb9ccefbc7b63"
    let URLB = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEYB}`
    fetch(URLB)
    .then(response => { 
        if (response.status == 200) {
            return response.json()
        }
        else console.log(`Erreur lorsqu'on a tenté de récupérer les data`);
    })
    .then(data => { 
        console.log(data.weather[0].description)
        
        var weatherImages = {
            "clear sky": ,
            "few clouds": "http://www.clker.com/cliparts/f/S/2/p/7/u/gold-matte-moon.svg",
            "scattered clouds": "https://cdn3.iconfinder.com/data/icons/weather-16/256/Rainy_Day-512.png",
            "broken clouds": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Nuvola_weather_snow.svg/1000px-Nuvola_weather_snow.svg.png",
            "shower rain": "http://www.clker.com/cliparts/f/6/7/4/1206565674431593790Anonymous_simple_weather_symbols_10.svg.hi.png",
            "rain": "http://www.haotu.net/up/4233/128/216-wind.png",
            "thunderstorm": "http://www.iconninja.com/files/81/344/943/fog-cloud-hiding-the-sun-weather-interface-symbol-icon.svg",
            "snow": "http://camera.thietbianninh.com/images/icon-2.png",
            "mist": "http://meteo.cw/images_www/weather_icons1/weather_icon_03.png",
          }
          

    })
})
.catch(err => console.log(err))
}
