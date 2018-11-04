
   var tempL = parseFloat(document.getElementById('low').value);
   var tempH = parseFloat(document.getElementById('high').value);
   var temperature = parseFloat((tempL + tempH) / 2);
   

var  speed = parseFloat(document.getElementById('windSpeed').value);

   var f =  35.74 + 0.6215 * temperature - 35.75 * windSpeed+ 0.4275 * temperature * windSpeed;
   
   document.getElementById('outputDiv').innerHTML = f;
  

   