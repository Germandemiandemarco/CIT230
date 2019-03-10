var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// URL del JSON

var request = new XMLHttpRequest();

// Get URL

request.open('GET', requestURL);
request.responseType = 'json';

request.send();


request.onload = function() {

   //VAR request with array

    var cities = request.response;
    
// DOM use from array to [0] - Town 

    document.getElementById('city0').innerHTML = cities['towns'][0].name;
    document.getElementById('motto0').innerHTML = cities['towns'][0].motto;
    document.getElementById('year0').innerHTML = cities['towns'][0].yearFounded;
    document.getElementById('population0').innerHTML = cities['towns'][0].currentPopulation;
    document.getElementById('rain0').innerHTML = cities['towns'][0].averageRainfall;
    

    // DOM use from array to [2] - Town 
    document.getElementById('city2').innerHTML = cities['towns'][2].name;
    document.getElementById('motto2').innerHTML = cities['towns'][2].motto;
    document.getElementById('year2').innerHTML = cities['towns'][2].yearFounded;
    document.getElementById('population2').innerHTML = cities['towns'][2].currentPopulation;
    document.getElementById('rain2').innerHTML = cities['towns'][2].averageRainfall;
    
   // DOM use from array to [6] - Town 

    document.getElementById('city6').innerHTML = cities['towns'][6].name;
    document.getElementById('motto6').innerHTML = cities['towns'][6].motto;
    document.getElementById('year6').innerHTML = cities['towns'][6].yearFounded;
    document.getElementById('population6').innerHTML = cities['towns'][6].currentPopulation;
    document.getElementById('rain6').innerHTML = cities['towns'][6].averageRainfall;
}
