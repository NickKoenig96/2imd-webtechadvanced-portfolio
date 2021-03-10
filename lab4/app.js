class App {
    constructor() {
        this.Start();
    }



    Start() {
        
        navigator.geolocation.getCurrentPosition((position)=> {
            let lat =position.coords.latitude;
            let lng = position.coords.longitude;

            console.log(lat+lng);

            this.getWeather(lat, lng);
        });
    
    }

    getWeather(lat , lng){
        let key = 'e7dfca2a9d5e817941782d9872085b04';
        //let url = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;
        console.log(url);
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json)

            let temperature = json.current.temp;
        console.log(temperature);
        
        })

        

      

    }


}

let app = new App();







