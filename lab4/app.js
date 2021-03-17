class App {
    constructor() {

        let weatherStorage = JSON.parse(localStorage.getItem('weatherStorage'));
        /* console.log(weatherStorage);
         console.log(weatherStorage.dateTime);
         console.log(weatherStorage.dateTimePlusOne);
 
         if( weatherStorage.dateTime >= weatherStorage.dateTimePlusOne){
             console.log('yes')
         }else{
             console.log('no')
         }*/


        if (weatherStorage === null || weatherStorage.dateTime > weatherStorage.dateTimePlusOne) {
            this.Start();
        }
        else {
            this.showAdLocalStorage();
            this.showActivityLocalStorage();
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
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {

                console.log(json);
                let forecast = json.current['weather'][0]['main'];
                console.log(forecast);
                let temperature = json.current.temp;

                this.showAd(temperature, forecast);
                this.getActivity(temperature);

                var today = new Date();
                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = date + ' ' + time;
                console.log(dateTime);

                var todayPlusOne = new Date();
                var datePlusOne = todayPlusOne.getFullYear() + '-' + (todayPlusOne.getMonth() + 1) + '-' + todayPlusOne.getDate();
                var timePlusOne = today.getHours() + 1 + ":" + todayPlusOne.getMinutes() + ":" + todayPlusOne.getSeconds();
                var dateTimePlusOne = datePlusOne + ' ' + timePlusOne;
                console.log(dateTimePlusOne);

                let weatherStorage = {
                    'temp': temperature,
                    'forecast': forecast,
                    'dateTime': dateTime,
                    'dateTimePlusOne': dateTimePlusOne
                };

                this.setLocalStorage(weatherStorage);

            })
    }

    showAd(temperature, forecast) {
        document.querySelector('#temp').innerHTML = temperature;
        document.querySelector('#forecast').innerHTML = forecast;

    }

    setLocalStorage(weatherStorage) {
        localStorage.setItem('weatherStorage', JSON.stringify(weatherStorage));

    }

    showAdLocalStorage() {

        let weatherData = JSON.parse(localStorage.getItem('weatherStorage'));
        document.querySelector('#temp').innerHTML = weatherData.temp;
        document.querySelector('#forecast').innerHTML = weatherData.forecast;

    }

    getActivity(temperature) {
        let type = '';
        let image = ''
        if (temperature >= 17) {
            type = 'social'
        } else if (temperature >= 12) {
            type = 'music'
        } else {
            type = 'diy'
        }

        let url = `https://www.boredapi.com/api/activity?type=${type}`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                let activity = json['activity'];
                console.log(activity);

                if (activity === 'Create a compost pile') {
                    activity = 'Play a video game'
                }

                this.showActivity(activity, image);



                let activityStorage = {
                    'activity': activity,
                };

                this.setLocalStorageActivity(activityStorage);
            })
    }

    showActivity(activity) {
        document.querySelector('#activity').innerHTML = activity;
    }

    setLocalStorageActivity(activityStorage) {
        localStorage.setItem('activityStorage', JSON.stringify(activityStorage));

    }

    showActivityLocalStorage() {
        let activityStorage = JSON.parse(localStorage.getItem('activityStorage'));
        document.querySelector('#activity').innerHTML = activityStorage.activity;
    }

}

let app = new App();







