require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const weatherApiKey = process.env.WEATHER_API_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Server is running" });
});

app.get("/api/cities", async (req, res) => {
  const { data, error } = await supabase
    .from("cities")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return res.status(500).json({ success: false, error: error.message });
  }

  res.json({ success: true, data });
});

app.post("/api/cities", async (req, res) => {
  const { name, country, note } = req.body;

  if (!name || !country) {
    return res.status(400).json({
      success: false,
      error: "City name and country are required"
    });
  }

  const { data, error } = await supabase
    .from("cities")
    .insert([{ name, country, note: note || "" }])
    .select();

  if (error) {
    return res.status(500).json({ success: false, error: error.message });
  }

  res.status(201).json({ success: true, data });
});

app.delete("/api/cities/:id", async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from("cities")
    .delete()
    .eq("id", id);

  if (error) {
    return res.status(500).json({ success: false, error: error.message });
  }

  res.json({ success: true, message: "City deleted." });
});

app.get("/api/weather/:city", async (req, res) => {
  const city = req.params.city;

  try {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${weatherApiKey}&units=imperial`;

    const response = await fetch(weatherUrl);
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        error: data.message || "Weather data not found"
      });
    }

    res.json({
      success: true,
      data: {
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        wind_speed: data.wind.speed,
        visibility: data.visibility
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = app;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
