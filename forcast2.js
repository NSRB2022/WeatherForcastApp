
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
        console.log(data.weather[0].id);      
    })
    let submit = document.getElementById ("submitcity")
    const date = new Date();
    const day = date.getDay(date); 
    console.log(day);

document.addEventListener("DOMContentLoaded", function()
{
submit.addEventListener("click", function(){
    let today = document.getElementsByClassName("topDay")[0]
    if(day=="1")
    {
        today.innerHTML="monday"
    }
    else if (day =="2")
    {
        today.innerHTML="tuesday"
    }

})})

})
.catch(err => console.log(err))
}
