# CityWeather

CityWeather is a full-stack weather web application that allows users to search for weather conditions in cities around the world. 
Users can view real-time weather information, save favorite cities, compare temperatures visually using charts, and explore locations on an interactive map.

This project was created as a solo final project for INST377 at the University of Maryland.

---

# Features

- Search real-time weather by city
- Save favorite cities
- Compare city temperatures visually
- Interactive weather map
- Responsive design
- Full-stack Node.js and Express application
- Supabase database integration
- External weather API integration

---

# Technologies Used

- Node.js
- Express.js
- Supabase
- OpenWeatherMap API
- Chart.js
- Leaflet.js
- HTML
- CSS
- JavaScript

---

# Target Browsers

The application is designed to work on modern desktop and mobile browsers including:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

# Live Deployment

Vercel Deployment Link:

```txt
https://your-vercel-app-link.vercel.app
```

---

# GitHub Repository

```txt
https://github.com/yourusername/cityweather-app
```

---

# Developer Manual

The Developer Manual is located in:

```txt
/docs
```

It includes:
- installation instructions
- application setup
- API documentation
- known bugs
- future roadmap
- deployment information

---

# Installation Instructions

Clone the repository:

```bash
git clone https://github.com/yourusername/cityweather-app.git
```

Move into the project folder:

```bash
cd cityweather-app
```

Install dependencies:

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_supabase_anon_key
WEATHER_API_KEY=your_openweathermap_key
```

---

# Running the Application

Start the server:

```bash
npm start
```

Open:

```txt
http://localhost:3000
```

---

# API Endpoints

## GET `/api/cities`

Returns all saved cities from Supabase.

---

## POST `/api/cities`

Adds a city to the database.

Request Body:

```json
{
  "name": "London",
  "country": "GB"
}
```

---

## GET `/api/weather/:city`

Fetches live weather data from OpenWeatherMap API.

Example:

```txt
/api/weather/London
```

---

# JavaScript Libraries Used

- Chart.js
- Leaflet.js

---

# Known Bugs

- Some city names may return incorrect locations if duplicate names exist globally
- Free OpenWeatherMap API may occasionally rate limit requests
- Background images may load slower on weak internet connections

---

# Future Improvements

- User authentication
- 5-day weather forecast
- Weather alerts
- City autocomplete search
- Dark/light theme toggle
- Improved mobile responsiveness

---

# Deployment

The project is deployed using Vercel.

Environment variables are configured through the Vercel dashboard.

---

# Author

Omolayo Johnson
Solo Project — INST377  
University of Maryland
