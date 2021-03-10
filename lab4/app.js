class App {
    constructor() {

        let weatherStorage = JSON.parse(localStorage.getItem('weatherStorage'));

        if(weatherStorage === null || Date.now() === weatherStorage.reloadstamp){
            this.Start();
        }
        else{
           this.showAdLocalStorage()
        }

        
    }



    Start() {

        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;


            this.getWeather(lat, lng);
        });

    }

    getWeather(lat, lng) {
        let key = 'e7dfca2a9d5e817941782d9872085b04';
        //let url = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                //console.log(json)

                let temperature = json.current.temp;

                this.showAd(temperature);

             
                let reloadstamp = new Date();
                reloadstamp.setHours(reloadstamp.getHours()+1);
              



                let weatherStorage = {
                    'temp' : temperature,
                    'reloadstamp' : reloadstamp
                };

                this.setLocalStorage(weatherStorage);
                console.log(weatherStorage)
                

            })

    }

    showAd(temperature){
        document.querySelector('#temp').innerHTML = temperature;
    }

    setLocalStorage(weatherStorage){
        localStorage.setItem('weatherStorage', JSON.stringify(weatherStorage));

    }

    showAdLocalStorage(){

        let weatherData = JSON.parse(localStorage.getItem('weatherStorage'));
        document.querySelector('#temp').innerHTML = weatherData.temp;
        console.log(weatherData)
    }


}

let app = new App();







