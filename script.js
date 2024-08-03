// script.js
const tempInput = document.getElementById('temp');
const unitSelect = document.getElementById('unit');
const convertButton = document.getElementById('convert');
const resultElement = document.getElementById('result');

convertButton.addEventListener('click', convertTemperature);

function convertTemperature() {
  const tempValue = parseFloat(tempInput.value);
  const unitValue = unitSelect.value;

  if (unitValue === 'celsius') {
    const fahrenheit = tempValue * 9 / 5 + 32;
    const kelvin = tempValue + 273.15;
    resultElement.innerHTML = `${tempValue}°C = ${fahrenheit}°F = ${kelvin}K`;
  } else if (unitValue === 'fahrenheit') {
    const celsius = (tempValue - 32) * 5 / 9;
    const kelvin = celsius + 273.15;
    resultElement.innerHTML = `${tempValue}°F = ${celsius}°C = ${kelvin}K`;
  } else if (unitValue === 'kelvin') {
    const celsius = tempValue - 273.15;
    const fahrenheit = celsius * 9 / 5 + 32;
    resultElement.innerHTML = `${tempValue}K = ${celsius}°C = ${fahrenheit}°F`;
  }
}
