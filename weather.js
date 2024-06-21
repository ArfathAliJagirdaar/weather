let form = document.getElementById("myForm");
let tempVal = document.getElementById("tempVal");
let finalCondition = document.getElementById("tempDet");
let humidVal = document.getElementById("humidVal");
let img=document.querySelector("img")
let main=document.getElementById("main_container")


form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let fetchData = async() =>{
        let key = "3af9d43bdd5dd35e1247516ae0016683";
        let loc = document.getElementById("location").value;
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}`);
        let finalOutput = await data.json()
        console.log(finalOutput.main.temp);
        tempVal.innerHTML = Math.round(finalOutput.main.temp-273) + "";
        finalCondition.innerHTML = finalOutput.weather[0].main;
        humidVal.innerHTML = finalOutput.main.humidity + "%";
        if (finalCondition="haze") {
            img.src="./ASSETS/haze.png"
                
            }
            else if(finalCondition=="rain") {
                img.src="./ASSETS/rain.gif"

            }
            else if(finalCondition=="Cloud") {
                img.src="./ASSETS/cloud.png"
                main.style.backgroundImage="url('cloudy.jpg')"
            }
            else if(finalCondition=="snow") {
                img.src="./ASSETS/snow.png"
            }

        else{

        }
    }
    fetchData()
})
