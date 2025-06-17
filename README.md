<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>

  <h1>🌦️ Simple Weather App</h1>
  <p>
    A clean, beginner-friendly weather app built using <strong>HTML, CSS, and JavaScript</strong>, fetching real-time weather data from the <strong>OpenWeatherMap API</strong>.
  </p>

  <h2>📸 Screenshot</h2>
  <img src="screenshot.png" alt="Weather App Screenshot" />

  <h2>🚀 Live Demo</h2>
  <p><a href="https://your-deployment-link.com" target="_blank">Click here to try the app</a></p>

  <h2>🧠 Features</h2>
  <ul>
    <li>🌍 Choose any city to view current weather</li>
    <li>🌡️ Shows temperature (min, max, current)</li>
    <li>☁️ Displays weather description and icon</li>
    <li>📆 Dynamic date display</li>
    <li>💡 Built to be easily customizable and scalable</li>
  </ul>

  <h2>🔧 Tech Stack</h2>
  <ul>
    <li><strong>HTML</strong> – Structure</li>
    <li><strong>CSS</strong> – Styling</li>
    <li><strong>JavaScript</strong> – Logic + API integration</li>
    <li><strong>OpenWeatherMap API</strong> – Weather data</li>
  </ul>

  <h2>🗺️ Architecture</h2>
  <div class="diagram">
graph TD
  A[User] --> B[Web Page (HTML)]
  B --> C[JavaScript Logic]
  B --> D[CSS Styling]
  C --> E[OpenWeatherMap API]
  </div>

  <h2>📁 Project Structure</h2>
  <pre>
weather-app/
├── index.html
├── style.css
├── script.js
├── screenshot.png
└── readme.html
  </pre>

  <h2>🔑 How to Use</h2>
  <ol>
    <li>Clone the repository:
      <pre>git clone https://github.com/yourusername/weather-app.git</pre>
    </li>
    <li>Open <code>index.html</code> in your browser.</li>
    <li>Enter a city name in the input and get live weather info!</li>
  </ol>

  <h2>🛠️ To Do / Improvements</h2>
  <ul>
    <li>[ ] Add responsive design</li>
    <li>[ ] Allow unit switching (Celsius/Fahrenheit)</li>
    <li>[ ] Show 5-day forecast</li>
    <li>[ ] Add loading/error handling</li>
  </ul>

  <h2>❤️ Acknowledgements</h2>
  <ul>
    <li><a href="https://openweathermap.org/" target="_blank">OpenWeatherMap</a> for the free API</li>
    <li>Inspired by weather UIs seen in modern mobile apps</li>
  </ul>

  <h2>📜 License</h2>
  <p>MIT License – feel free to use and modify!</p>

</body>
</html>
