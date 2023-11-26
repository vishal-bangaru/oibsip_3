function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelector = document.getElementById('unitSelector').value;
    let convertedTemperature = '';
  
    if (unitSelector === 'celsius') {
      const fahrenheit = (temperatureInput * 9/5) + 32;
      const kelvin = parseFloat(temperatureInput) + 273.15;
      convertedTemperature = `${temperatureInput}°C = ${fahrenheit.toFixed(2)}°F / ${kelvin.toFixed(2)}K`;
    } else if (unitSelector === 'fahrenheit') {
      const celsius = (temperatureInput - 32) * 5/9;
      const kelvin = (temperatureInput - 32) * 5/9 + 273.15;
      convertedTemperature = `${temperatureInput}°F = ${celsius.toFixed(2)}°C / ${kelvin.toFixed(2)}K`;
    } else if (unitSelector === 'kelvin') {
      const celsius = parseFloat(temperatureInput) - 273.15;
      const fahrenheit = (parseFloat(temperatureInput) - 273.15) * 9/5 + 32;
      convertedTemperature = `${temperatureInput}K = ${celsius.toFixed(2)}°C / ${fahrenheit.toFixed(2)}°F`;
    }
  
    document.getElementById('result').innerText = convertedTemperature;
  }
  