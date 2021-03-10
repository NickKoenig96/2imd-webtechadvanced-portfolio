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




}

let app = new App();







