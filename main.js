<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Explore Weather | CityWeather</title>

  <link rel="stylesheet" href="/css/style.css" />
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet/dist/leaflet.css"
  />
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
</head>

<body>
  <nav class="navbar">
    <div class="logo">
      <h1>CityWeather</h1>
    </div>
    <ul class="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/explore.html">Explore</a></li>
      <li><a href="/about.html">About</a></li>
    </ul>
  </nav>
  <main class="explore-container">
    <section class="search-section">
      <h2>Search City Weather</h2>

      <div class="search-box">
        <input
          type="text"
          id="cityInput"
          placeholder="Enter city name..."
        />
        <button id="searchBtn">
          Search
        </button>
      </div>
    </section>

    <section class="weather-results">

      <div id="weatherCard" class="weather-card">

        <h3>Weather Information</h3>

        <p class="placeholder">
          Search for a city to view weather data
        </p>

      </div>

    </section>

    <section class="saved-cities-section">

      <h2>Saved Cities</h2>

      <div id="savedCities" class="saved-cities-list">
      </div>

    </section>

    <section class="chart-section">

      <h2>City Temperature Comparison</h2>

      <canvas id="weatherChart"></canvas>

    </section>

    <section class="map-section">

      <h2>Interactive Weather Map</h2>

      <div id="map"></div>

    </section>

  </main>

  <footer class="footer">
    <p>
      Solo Project • INST377 • University of Maryland
    </p>
  </footer>

  <div id="toast"></div>
  <script src="/js/explore.js"></script>

</body>
</html>
