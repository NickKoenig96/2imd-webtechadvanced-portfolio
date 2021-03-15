class App {
    constructor() {

        let weatherStorage = JSON.parse(localStorage.getItem('weatherStorage'));
        console.log(weatherStorage);
        console.log(weatherStorage.dateTime);
        console.log(weatherStorage.dateTimePlusOne);

        if( weatherStorage.dateTime >= weatherStorage.dateTimePlusOne){
            console.log('yes')
        }else{
            console.log('no')
        }


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
                let forecast = json.current['weather'][0]['description'];
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
                var timePlusOne = today.getHours()+1 + ":" + todayPlusOne.getMinutes() + ":" + todayPlusOne.getSeconds();
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
            image = 'https://images.unsplash.com/photo-1540634759006-203f597e1a34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=724&q=80'
        } else if (temperature >= 12) {
            type = 'music'
            image = 'https://images.unsplash.com/photo-1446185250204-f94591f7d702?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80'
        } else {
            type = 'cooking'
            image = 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80'
        }

        let url = `https://www.boredapi.com/api/activity?type=${type}`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                let activity = json['activity'];

                this.showActivity(activity, image);



                let activityStorage = {
                    'activity': activity,
                    'image': image
                };

                this.setLocalStorageActivity(activityStorage);
            })
    }

    showActivity(activity, image) {
        document.querySelector('#activity').innerHTML = activity;
        document.querySelector('#article').style.backgroundImage = `url(${image})`;
    }

    setLocalStorageActivity(activityStorage) {
        localStorage.setItem('activityStorage', JSON.stringify(activityStorage));

    }

    showActivityLocalStorage() {
        let activityStorage = JSON.parse(localStorage.getItem('activityStorage'));
        document.querySelector('#activity').innerHTML = activityStorage.activity;
        document.querySelector('#article').style.backgroundImage = `url(${activityStorage.image})`;

    }

}

let app = new App();







