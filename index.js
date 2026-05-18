app.use(express.static(path.join(__dirname, "public")));
const express = require('express');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
const requiredEnv = ['SUPABASE_URL', 'SUPABASE_KEY', 'WEATHER_API_KEY'];
const missingEnv = requiredEnv.filter((key) => !process.env[key]);

if (missingEnv.length > 0) {
  console.warn(`Missing environment variables: ${missingEnv.join(', ')}`);
}
let supabase = null;
if (process.env.SUPABASE_URL && process.env.SUPABASE_KEY) {
  supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
}

function requireSupabase(res) {
  if (!supabase) {
    res.status(500).json({
      success: false,
      error: 'Supabase is not configured. Check SUPABASE_URL and SUPABASE_KEY in your .env file.'
    });
    return false;
  }
  return true;
}
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'CityWeather API is running.',
    env: {
      SUPABASE_URL: Boolean(process.env.SUPABASE_URL),
      SUPABASE_KEY: Boolean(process.env.SUPABASE_KEY),
      WEATHER_API_KEY: Boolean(process.env.WEATHER_API_KEY)
    }
  });
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/explore', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'explore.html'));
});
app.get('/api/cities', async (req, res) => {
  if (!requireSupabase(res)) return;

  try {
    const { data, error } = await supabase
      .from('cities')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    res.json({ success: true, data });
  } catch (err) {
    console.error('GET /api/cities error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});
app.post('/api/cities', async (req, res) => {
  if (!requireSupabase(res)) return;

  const { name, country, note } = req.body;

  if (!name || !country) {
    return res.status(400).json({
      success: false,
      error: 'City name and country are required.'
    });
  }

  try {
    const { data, error } = await supabase
      .from('cities')
      .insert([{ name, country, note: note || '' }])
      .select();

    if (error) throw error;
    res.status(201).json({ success: true, data });
  } catch (err) {
    console.error('POST /api/cities error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});
app.get('/api/weather/:city', async (req, res) => {
  const city = req.params.city;
  const apiKey = process.env.WEATHER_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      success: false,
      error: 'Weather API key is not configured. Check WEATHER_API_KEY in your .env file.'
    });
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=imperial`;
    const response = await fetch(url);
    const payload = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        error: payload.message || 'Weather lookup failed.'
      });
    }

    res.json({
      success: true,
      data: {
        city: payload.name,
        country: payload.sys.country,
        temp: Math.round(payload.main.temp),
        feels_like: Math.round(payload.main.feels_like),
        humidity: payload.main.humidity,
        description: payload.weather[0].description,
        icon: payload.weather[0].icon,
        wind_speed: Math.round(payload.wind.speed),
        visibility: payload.visibility
      }
    });
  } catch (err) {
    console.error('GET /api/weather error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});
app.get('/api/geocode/:city', async (req, res) => {
  const city = req.params.city;

  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1`;
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'CityWeather INST377 Student Project'
      }
    });
    const payload = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        error: 'Map lookup failed.'
      });
    }

    if (!payload.length) {
      return res.status(404).json({
        success: false,
        error: 'City location not found.'
      });
    }

    res.json({
      success: true,
      data: {
        lat: payload[0].lat,
        lon: payload[0].lon,
        display_name: payload[0].display_name
      }
    });
  } catch (err) {
    console.error('GET /api/geocode error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});
app.delete('/api/cities/:id', async (req, res) => {
  if (!requireSupabase(res)) return;

  const { id } = req.params;

  try {
    const { error } = await supabase
      .from('cities')
      .delete()
      .eq('id', id);

    if (error) throw error;
    res.json({ success: true, message: 'City deleted.' });
  } catch (err) {
    console.error('DELETE /api/cities error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
