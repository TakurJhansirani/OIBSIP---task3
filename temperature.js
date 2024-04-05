document.addEventListener('DOMContentLoaded', function() {
    console.log("script is executing");

let celsiusInput = document.querySelector('#celsius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');
let btn = document.querySelector('.button button');

function roundnumber(number){
    return Math.round(number*100)/100;
}

celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value);
    let fTemp = (cTemp*(9/5)) + 32;
    let kTemp = cTemp + 273.15;

    fahrenheitInput.value = roundnumber(fTemp);
    kelvinInput.value = roundnumber(kTemp);
});

fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp-32) * (5/9);
    let kTemp = (fTemp-32) * (5/9) + 273.15;

    celsiusInput.value = roundnumber(cTemp);
    kelvinInput.value = roundnumber(kTemp);
});

kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * (9/5) + 32;

    celsiusInput.value = roundnumber(cTemp);
    fahrenheitInput.value = roundnumber(fTemp);
});

btn.addEventListener('click', () => {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";       
});
});