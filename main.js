console.log('main.js is connected!');
const apiKEY = "11af52653248f1eb76b8c4495e7dff61"

function apiCall(inputText){

  let name = document.createElement('h2')
  let temp = document.createElement('p')
  let description = document.createElement('p')
  let min = document.createElement('p')
  let max = document.createElement('p')
  fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${inputText},us&appid=${apiKEY}`)
      .then((response) => {
        return response.json();
    })
    .then((json) => {
      console.log(json);
      
      name.textContent = json.name
      let allTemperatureVariables = json.main

      const kelvinToFarhenheit = (temp)=>{
        temp = parseInt(temp)
        temp = (temp * 9/5) - 459.67
        temp = temp.toFixed(0)
        return temp
      }
      let temperature = ' It is: '+ (kelvinToFarhenheit(allTemperatureVariables.temp) + ' Degrees in ' + name.textContent)
      temp.textContent = temperature
      let min_temp = 'The minimum temperature here is: ' + (kelvinToFarhenheit(allTemperatureVariables.temp_min) + ' Degrees')
      min.textContent =  min_temp
      let max_temp = 'The maximum temperature here is: ' + (kelvinToFarhenheit(allTemperatureVariables.temp_max) + ' Degrees')
      max.textContent =  max_temp
      
     
      description.textContent = json.weather[0].description
      

      
    
      document.querySelector('.container').appendChild(name)
      document.querySelector('.container').appendChild(temp)
      
      document.querySelector('.container').appendChild(description)
      document.querySelector('.container').appendChild(min)
     
      document.querySelector('.container').appendChild(max)
      
      

    })

}

document.addEventListener('DOMContentLoaded', function() {
  
  
  let input = document.querySelector('#search')
  let button  = document.createElement('button')
  button.textContent = 'Submit'
  document.querySelector('.input').appendChild(input)
  document.querySelector('.input').appendChild(button)
  


  apiCall('11226')
  
  button.addEventListener('click', function(){
    let inputText = input.value
    document.querySelector('.container').innerHTML = ''
    apiCall(inputText)
    input.value= ''

  })
})


