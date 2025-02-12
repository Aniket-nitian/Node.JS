import readline from "readline";

const API_KEY = "a52533f9796150d2e9f82d6e2de4aa96";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const city = async () => {
  rl.question("Enter city name to get pit's weather: ", async (city) => {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    try {
      const weatherData = await fetch(url);

      const data = await weatherData.json();
      console.log(data);
      console.log("\nWeather Information: ");
      console.log(`City: ${data.name}`);
      console.log(`Temperature: ${data.main.temp}°C`);
      console.log(`Humidity: ${data.main.humidity}%`);
      console.log(`Description: ${data.weather[0].description}`);
      console.log(`Wind Speed: ${data.wind.speed} km/h`);
    } catch (error) {
      console.log(error);
    }
    rl.close();
  });
};

city();
