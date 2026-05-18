# Developer Manual

This developer manual is written for future developers who may take over the CityWeather project. It assumes basic knowledge of Node.js, Express, REST APIs, frontend JavaScript, and databases, but no prior knowledge of this specific codebase.

## 1. Application Overview

CityWeather is a full-stack JavaScript application. The frontend is built with HTML, CSS, and vanilla JavaScript. The backend is an Express server running on Node.js. Saved city data is stored in a Supabase PostgreSQL database. Live weather data comes from the OpenWeatherMap API. Map location search is handled through a backend geocoding endpoint using OpenStreetMap Nominatim.

The frontend communicates with the backend using the Fetch API. The frontend does not directly call the OpenWeatherMap API or Supabase. API keys and sensitive credentials are stored as environment variables on the server side.

## 2. Required Software

Install the following before running the project locally:

- Node.js version 18 or higher
- npm
- Git
- A Supabase account
- An OpenWeatherMap API key

## 3. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/cityweather-app.git
cd cityweather-app
npm install
```

## 4. Environment Variables

Create a `.env` file in the root folder:

```bash
cp .env.example .env
```

Add the following values:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_supabase_anon_public_key
WEATHER_API_KEY=your_openweathermap_api_key
```

Important notes:

- Use the Supabase `anon public` key, not the `service_role` key.
- Do not commit the `.env` file to GitHub.
- When deploying to Vercel, manually add these same environment variables in the Vercel project settings.

## 5. Supabase Database Setup

In the Supabase SQL Editor, run the following SQL:

```sql
CREATE TABLE IF NOT EXISTS cities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  note TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

If Row Level Security is enabled and the app cannot read, save, or delete cities, run these policies for this class project:

```sql
ALTER TABLE cities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
ON cities
FOR SELECT
USING (true);

CREATE POLICY "Allow public insert access"
ON cities
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow public delete access"
ON cities
FOR DELETE
USING (true);
```

## 6. Running the Application Locally

Start the server:

```bash
npm start
```

Open the app in a browser:

```text
http://localhost:3000
```

For development with automatic restart:

```bash
npm run dev
```

## 7. Testing

There is currently no automated test suite for this project. Manual testing should be completed before submission or deployment.

Manual testing checklist:

1. Open `http://localhost:3000` and confirm the home page loads.
2. Search for a city on the home page and confirm live weather appears.
3. Open `/explore`.
4. Search for a city and confirm weather results display.
5. Save a city with a note.
6. Refresh the page and confirm the saved city remains visible.
7. Delete a saved city and confirm it is removed.
8. Add two or more cities to the comparison chart.
9. Pin a city on the map.
10. Open `/about` and confirm the solo project description appears.
11. Visit `/api/health` and confirm the environment checks return `true`.

## 8. API Endpoints

All API routes are defined in `index.js` and are prefixed with `/api`.

### GET `/api/health`

Checks whether the server is running and whether environment variables are loaded.

Example response:

```json
{
  "success": true,
  "message": "CityWeather API is running.",
  "env": {
    "SUPABASE_URL": true,
    "SUPABASE_KEY": true,
    "WEATHER_API_KEY": true
  }
}
```

### GET `/api/cities`

Retrieves all saved cities from the Supabase `cities` table, ordered by newest first.

Example response:

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid-here",
      "name": "Tokyo",
      "country": "JP",
      "note": "Would love to visit",
      "created_at": "2026-05-17T12:00:00Z"
    }
  ]
}
```

### POST `/api/cities`

Writes a new city to the Supabase database.

Request body:

```json
{
  "name": "Paris",
  "country": "FR",
  "note": "Optional note"
}
```

Validation:

- `name` is required
- `country` is required

### DELETE `/api/cities/:id`

Deletes a saved city by UUID.

Example response:

```json
{
  "success": true,
  "message": "City deleted."
}
```

### GET `/api/weather/:city`

Gets current weather data from OpenWeatherMap through the backend.

Example request:

```text
/api/weather/London
```

Example response:

```json
{
  "success": true,
  "data": {
    "city": "London",
    "country": "GB",
    "temp": 55,
    "feels_like": 52,
    "humidity": 78,
    "description": "light rain",
    "icon": "10d",
    "wind_speed": 12,
    "visibility": 10000
  }
}
```

### GET `/api/geocode/:city`

Gets latitude, longitude, and display name for a city using OpenStreetMap Nominatim through the backend. This supports the Leaflet map feature.

Example request:

```text
/api/geocode/Baltimore
```

Example response:

```json
{
  "success": true,
  "data": {
    "lat": "39.2908816",
    "lon": "-76.610759",
    "display_name": "Baltimore, Maryland, United States"
  }
}
```

## 9. Frontend Data Flow

The frontend uses Fetch API calls through `apiFetch()` in `public/js/main.js`.

Frontend calls include:

- `GET /api/weather/:city` for live weather
- `GET /api/cities` for saved city data
- `POST /api/cities` for saving cities
- `DELETE /api/cities/:id` for deleting cities
- `GET /api/geocode/:city` for map pinning

The two required frontend JavaScript libraries are:

- Chart.js for weather comparison charts
- Leaflet.js for interactive mapping

## 10. Deployment to Vercel

Deployment steps:

1. Create your own public GitHub repository.
2. Push the completed project to that repository.
3. Log in to Vercel.
4. Import the GitHub repository.
5. Add the environment variables:
   - `SUPABASE_URL`
   - `SUPABASE_KEY`
   - `WEATHER_API_KEY`
6. Deploy the project.

The project includes a `vercel.json` file that points Vercel to `index.js` as the main Node application.

## 11. Known Bugs and Limitations

- City names can be ambiguous when multiple cities have the same name.
- OpenWeatherMap API keys may take several minutes to activate.
- OpenWeatherMap and Nominatim may rate-limit frequent requests.
- The app allows duplicate city entries.
- There is currently no user authentication, so all saved cities are shared publicly in the database table.
- There is no automated test suite yet.

## 12. Future Development Roadmap

- Add user authentication with Supabase Auth.
- Add duplicate city detection before saving.
- Add a 5-day weather forecast feature.
- Add search autocomplete for city names.
- Add Celsius/Fahrenheit unit toggle.
- Add editable notes using a PATCH endpoint.
- Add automated tests for backend API routes.
- Add loading skeletons and stronger mobile UI polish.
- Add user-specific saved city lists.
