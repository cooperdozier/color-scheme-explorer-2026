const { convert } = require('color-convert');
// import convert from 'color-convert';


// document.getElementById("converted-color").innerHTML = `<li>${convert.rgb.hsl(document.getElementById("convert-a-color").value)}</li>`; 
console.log(convert.hsl.hex(140, 200, 100));  
// console.log(convert.rgb(140,200,100).hsl)