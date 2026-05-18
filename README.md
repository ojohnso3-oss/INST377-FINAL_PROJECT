# CityWeather

CityWeather is a full-stack weather web application created as a solo INST 377 final project at the University of Maryland. The application lets users search for real-time weather by city, save favorite cities to a Supabase database, compare weather conditions with an interactive chart, and pin cities on an interactive map.

## Live Links

- GitHub Repository: (https://github.com/ojohnso3-oss/INST377-FINAL_PROJECT)
- Vercel Deployment: [https://vercel.com/ojohnso3-oss-projects/inst-377-final-project/CESwE5Z6MRavhrMbNLbkDWnQdArL](https://vercel.com/ojohnso3-oss-projects/inst-377-final-project)
- Developer Manual: [docs/DeveloperManual.md](docs/DeveloperManual.md)

## Target Browsers

CityWeather was designed and tested for modern desktop and mobile browsers:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari on macOS
- Safari on iOS
- Chrome on Android

The app uses modern JavaScript, Fetch API, CSS Grid, Flexbox, Chart.js, and Leaflet.js, so very old browsers may not fully support all features.

## Features

- Search real-time weather for any city
- View temperature, humidity, wind speed, visibility, and weather conditions
- Save favorite cities with optional notes
- Delete saved cities
- Compare multiple cities using Chart.js
- Pin city locations on a Leaflet map
- Store saved city data in Supabase
- Deploy the full-stack Express app to Vercel

## Tech Stack

- Node.js
- Express.js
- Supabase / PostgreSQL
- OpenWeatherMap API
- OpenStreetMap Nominatim
- Chart.js
- Leaflet.js
- HTML, CSS, and JavaScript
- Vercel

## Project Structure

```text
cityweather-app/
├── index.js
├── package.json
├── package-lock.json
├── vercel.json
├── .env.example
├── .gitignore
├── README.md
├── docs/
│   ├── DeveloperManual.md
│   └── FinalSubmissionChecklist.md
└── public/
    ├── index.html
    ├── explore.html
    ├── about.html
    ├── css/
    │   └── style.css
    └── js/
        ├── main.js
        ├── home.js
        └── explore.js
```

## Quick Start

```bash
git clone https://github.com/YOUR_USERNAME/cityweather-app.git
cd cityweather-app
npm install
cp .env.example .env
npm start
```

Open the app at:

```text
http://localhost:3000
```

## Environment Variables

Create a `.env` file in the root directory using `.env.example` as a guide:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_supabase_anon_public_key
WEATHER_API_KEY=your_openweathermap_api_key
```

Do not commit `.env` to GitHub.

## Developer Manual

Full setup, API documentation, testing instructions, known bugs, and future roadmap are included here:

[docs/DeveloperManual.md](docs/DeveloperManual.md)

## Author

Solo project by Omolayo Johnson for INST 377 at the University of Maryland.
