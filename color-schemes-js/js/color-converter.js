// import convert from 'color-convert';
// const convert = require('color-convert')
document.getElementById("converted-color").innerHTML = `<li>${convert.rgb.hsl(document.getElementById("convert-a-color").value)}</li>`; 