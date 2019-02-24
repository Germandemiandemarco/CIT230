
  
   var temperature = 76;
   var windSpeed = 5;
   var round = Math.round(2);

   var f =  35.74 + 0.6215 * temperature - 35.75 * windSpeed + 0.4275 * temperature * windSpeed;

   document.getElementById('conversion').innerHTML = Math.round(f, 2);
  
