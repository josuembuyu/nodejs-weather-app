const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=c11d1f2ec0921ecf4f2417d659646393&query=New%20York'

request({url: url, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!');
    }else if (response.body.error) {
        console.log('Unable to find location');
    }
    else {
        const current = response.body.current;
        console.log("It is currently " + current.temperature + " degress out. It feels like " + current.feelslike + " degress out");
    }
    
})


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoiam9zdWVtYnV5dSIsImEiOiJja28xcDE5em4wcnNjMm9tdnVkMmpibmt5In0.6me-BPbtNIyBVUwLYfmpyA';

request({url: geocodeURL, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!');
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location');
    }else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        
        console.log(latitude, longitude);
    }
    
})