console.log('main.js is connected!');

document.addEventListener('DOMContentLoaded', function(){
  let input = document.createElement('input')
  input.placeholder = 'Enter a zip code'
  let button  = document.createElement('button')
  button.textContent = 'Submit'
  document.querySelector('.container').appendChild(input)
  document.querySelector('.container').appendChild(button)
  
  button.addEventListener('click', function(){
    let inputText = input.value
    console.log(inputText)

    let cityName = document.createElement('h2')
    let temperature = document.createElement('p')
    let weatherDesc = document.createElement('p')
    let minTemp = document.createElement('p')
    let maxTemp = document.createElement('p')

    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${inputText},us&appid=11af52653248f1eb76b8c4495e7dff61`)
      .then((response) => {
        return response.json();
    })
    .then((response) => {
      console.log(response);
      
      cityName.textContent = response.name

      let allTemperatureVariables = response.main

      const kelvinToFarhenheit = (temp)=>{
        temp = parseInt(temp)
        temp = (temp * 9/5) - 459.67
        return temp.toFixed(0)
      }
      temperature.textContent = kelvinToFarhenheit(allTemperatureVariables.temp)
      minTemp.textContent =  kelvinToFarhenheit(allTemperatureVariables.temp_min)
      maxTemp.textContent =  kelvinToFarhenheit(allTemperatureVariables.temp_max)
     
      weatherDesc.textContent = response.weather[0].description

      document.querySelector('.container').appendChild(cityName)
      document.querySelector('.container').appendChild(temperature)
      document.querySelector('.container').appendChild(weatherDesc)
      document.querySelector('.container').appendChild(minTemp)
      document.querySelector('.container').appendChild(maxTemp)

  })

  })
})

