document.addEventListener("DOMContentLoaded", function() 
{   
    
    let submit = document.getElementById("submitCity")    
    const newDate = new Date();
    const day = newDate.getDay()
    
   
    submit.addEventListener("click",function(){
        let today = document.getElementsByTagName("p")[0]
        if (day=="1")
        {
            today.innerHTML="monday"
        }
        else if(day=="2")
        {
            today.innerHTML="tuesday"
        }
        else if(day=="3")
        {
            today.innerHTML="wednesday"
        }
        else if(day=="4")
        {
            today.innerHTML="thursday"
        }
        else if (day=="5")
        {
            today.innerHTML="friday"
        }
        else if(day=="6")
        {
            today.innerHTML="saturday"
        }
        else if (day=="7")
        {
            today.innerHTML="sunday"
        }
        let city = document.getElementById("addCity").value
        console.log(city);
        const API_KEY = "dd9a3565602c437d9dd68c5e4f065470"
        let URL = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${API_KEY}&language=fr&pretty=1`
            
         fetch(URL) // on utilise la methode fetch, qui est asynchrone et qui existe par défaut dans le navigateur (on aurait aussi pu utiliser la librairie axios par exemple)
    // on utilise la méthode then() (NB: on pourrait aussi utiliser la syntaxe async/await)
        .then(response => { 
        if (response.status == 200) { // on vérifier que l'appel à l'API a fonctionné
            return response.json()  // ne pas oublier le return du callback
        }
        else console.log(`Erreur lorsqu'on a tenté de récupérer les data`);
        })
        .then(data => {
        const lattitude=data.results[0].geometry.lat
        const longitude=data.results[0].geometry.lng;
        const API_KEY2="104bf1cd8898dd5511abb9ccefbc7b63"
        URL2=`https://api.openweathermap.org/data/2.5/onecall?lat=${lattitude}&lon=${longitude}&appid=${API_KEY2}`
        return fetch(URL2)
                   .then(response => response.json())
                   .then(data=>{
                    let currentDay = data.current.weather[0].id
                    let bigIcon = getElementById("icon")
                    if (currentDay = 800) {
                        bigIcon.innerHTML = <Image src= "./images/clouds"></Image>
                    }


                    })
                   .catch(err => {
                   console.error('Request failed', err)
        })
        
        })
        
       
        
    })   
})