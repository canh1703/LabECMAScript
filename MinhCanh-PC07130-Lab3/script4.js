const convertTemperature = (temperature, unit) => {
    if (unit.toUpperCase() === "C") {
      return (temperature * 9/5) + 32;
    } else if (unit.toUpperCase() === "F") {
      return (temperature - 32) * 5/9;
    } else {
      return "Khoong hoo trow nhietj ddoo";
    }
  };
  
  const celsiusTemperature = 25;
  const fahrenheitTemperature = 77;
  
  console.log(`25 Celsius = ${convertTemperature(celsiusTemperature, "C")} Fahrenheit`);
  console.log(`77 Fahrenheit = ${convertTemperature(fahrenheitTemperature, "F")} Celsius`);
  