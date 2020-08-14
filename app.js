window.addEventListener('load', () => {
    let lon;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    

    if(navigator.geolocation){ 
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            
           const proxy ='https://cors-anywhere.herokuapp.com/'; 
           const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9d8ea1d9f21851017b9eb6afca425b27`;
            

     fetch(api)
     .then(response =>{
         return response.json();
     })
     .then(data => {
        console.log(data);
        const temp = data.main;
        const description = data.weather[0].main;
        const name = data.name;
       
        // Set DOM Elements from API
        temperatureDegree.textContent = temp.temp;
        temperatureDescription.textContent = description;
        locationTimezone.textContent = name;
        
     });
    });

    
    }
});