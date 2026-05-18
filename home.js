/* ─── IMPORTS ─────────────────────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap');

/* ─── VARIABLES ───────────────────────────────────────────── */
:root {
  --bg: #0a0f1e;
  --bg2: #111827;
  --card: #161d2f;
  --border: #1f2d47;
  --accent: #4f9cf9;
  --accent2: #f9a84f;
  --text: #e8edf7;
  --muted: #6b7a99;
  --success: #4ade80;
  --danger: #f87171;
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'DM Sans', sans-serif;
  --radius: 12px;
  --shadow: 0 4px 24px rgba(0,0,0,0.4);
}

/* ─── RESET & BASE ─────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
  min-height: 100vh;
}

/* ─── NOISE TEXTURE OVERLAY ────────────────────────────────── */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}

/* ─── NAV ──────────────────────────────────────────────────── */
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 15, 30, 0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nav-logo {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
  letter-spacing: -0.02em;
}

.nav-logo span { color: var(--accent); }

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.active { color: var(--text); }

.nav-links a.active { 
  color: var(--accent);
  border-bottom: 2px solid var(--accent);
  padding-bottom: 2px;
}

/* ─── HERO ──────────────────────────────────────────────────── */
.hero {
  position: relative;
  padding: 6rem 2rem 5rem;
  text-align: center;
  overflow: hidden;
}

.hero::after {
  content: '';
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(79,156,249,0.12) 0%, transparent 70%);
  pointer-events: none;
}

.hero-eyebrow {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.2rem;
  padding: 0.3rem 1rem;
  border: 1px solid rgba(79,156,249,0.3);
  border-radius: 100px;
}

.hero h1 {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 6vw, 5rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1.4rem;
}

.hero h1 em {
  font-style: italic;
  color: var(--accent);
}

.hero p {
  font-size: 1.1rem;
  color: var(--muted);
  max-width: 520px;
  margin: 0 auto 2.5rem;
}

/* ─── BUTTONS ───────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.6rem;
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  text-decoration: none;
}

.btn-primary {
  background: var(--accent);
  color: #0a0f1e;
}

.btn-primary:hover {
  background: #6ab3ff;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(79,156,249,0.35);
}

.btn-secondary {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.btn-danger {
  background: transparent;
  color: var(--danger);
  border: 1px solid rgba(248,113,113,0.3);
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  border-radius: 6px;
}

.btn-danger:hover { background: rgba(248,113,113,0.1); }

/* ─── MAIN LAYOUT ───────────────────────────────────────────── */
main {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
}

/* ─── CARDS ─────────────────────────────────────────────────── */
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.8rem;
  box-shadow: var(--shadow);
}

/* ─── SECTION HEADINGS ──────────────────────────────────────── */
.section-title {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.4rem;
}

.section-sub {
  color: var(--muted);
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

/* ─── FORM ──────────────────────────────────────────────────── */
.form-group {
  margin-bottom: 1.2rem;
}

label {
  display: block;
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 0.5rem;
}

input[type="text"],
textarea {
  width: 100%;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  font-family: var(--font-body);
  font-size: 0.95rem;
  padding: 0.7rem 1rem;
  transition: border-color 0.2s;
  outline: none;
}

input[type="text"]:focus,
textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(79,156,249,0.15);
}

textarea { resize: vertical; min-height: 80px; }

/* ─── WEATHER CARD ──────────────────────────────────────────── */
.weather-display {
  display: none;
  animation: fadeUp 0.4s ease;
}

.weather-display.visible { display: block; }

.weather-main {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.weather-temp {
  font-family: var(--font-display);
  font-size: 5rem;
  font-weight: 900;
  line-height: 1;
  color: var(--accent);
}

.weather-temp sup { font-size: 2rem; vertical-align: super; }

.weather-meta { flex: 1; }

.weather-city {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
}

.weather-desc {
  color: var(--muted);
  font-size: 0.95rem;
  text-transform: capitalize;
}

.weather-icon {
  width: 80px;
  height: 80px;
  filter: drop-shadow(0 0 12px rgba(79,156,249,0.4));
}

.weather-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat-box {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.9rem 1.2rem;
  text-align: center;
}

.stat-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  margin-bottom: 0.3rem;
}

.stat-value {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text);
}

/* ─── CITIES LIST ───────────────────────────────────────────── */
#cities-list {
  display: grid;
  gap: 0.8rem;
  margin-top: 1.5rem;
}

.city-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.9rem 1.2rem;
  animation: fadeUp 0.3s ease;
  transition: border-color 0.2s;
}

.city-item:hover { border-color: var(--accent); }

.city-item-info { flex: 1; }

.city-item-name {
  font-weight: 500;
  font-size: 0.95rem;
}

.city-item-country {
  font-size: 0.8rem;
  color: var(--muted);
}

.city-item-note {
  font-size: 0.82rem;
  color: var(--muted);
  font-style: italic;
  margin-top: 2px;
}

/* ─── CHART ─────────────────────────────────────────────────── */
#chartContainer {
  position: relative;
  height: 280px;
  margin-top: 1.5rem;
}

/* ─── TOAST ─────────────────────────────────────────────────── */
#toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  background: var(--card);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.9rem 1.4rem;
  border-radius: 10px;
  font-size: 0.9rem;
  box-shadow: var(--shadow);
  transform: translateY(120%);
  transition: transform 0.3s ease;
}

#toast.show { transform: translateY(0); }
#toast.success { border-color: var(--success); }
#toast.error { border-color: var(--danger); }

/* ─── GRID LAYOUTS ──────────────────────────────────────────── */
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

@media (max-width: 768px) {
  .two-col { grid-template-columns: 1fr; }
  .weather-stats { grid-template-columns: repeat(2, 1fr); }
  .hero { padding: 4rem 1.5rem 3rem; }
  nav { padding: 0 1rem; }
  .nav-logo { font-size: 1.1rem; }
}

/* ─── HOME PAGE FEATURES ────────────────────────────────────── */
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 4rem;
}

@media (max-width: 768px) {
  .features { grid-template-columns: 1fr; }
}

.feature-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.8rem;
  transition: border-color 0.2s, transform 0.2s;
}

.feature-card:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.feature-card h3 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
}

.feature-card p { color: var(--muted); font-size: 0.9rem; }

/* ─── ABOUT ─────────────────────────────────────────────────── */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.team-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  text-align: center;
}

.team-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 1rem;
  font-family: var(--font-display);
  font-weight: 700;
  color: #0a0f1e;
}

.team-name { font-weight: 600; font-size: 0.95rem; }
.team-role { color: var(--muted); font-size: 0.82rem; }

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.badge {
  background: rgba(79,156,249,0.1);
  border: 1px solid rgba(79,156,249,0.25);
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 500;
  padding: 0.3rem 0.7rem;
  border-radius: 100px;
  letter-spacing: 0.03em;
}

/* ─── SEARCH BAR ────────────────────────────────────────────── */
.search-row {
  display: flex;
  gap: 0.75rem;
}

.search-row input { flex: 1; }

/* ─── LOADER ────────────────────────────────────────────────── */
.loader {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(79,156,249,0.3);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

/* ─── EMPTY STATE ───────────────────────────────────────────── */
.empty-state {
  text-align: center;
  padding: 2.5rem;
  color: var(--muted);
}

.empty-state span { font-size: 2.5rem; display: block; margin-bottom: 0.75rem; }

/* ─── DIVIDER ───────────────────────────────────────────────── */
.divider {
  height: 1px;
  background: var(--border);
  margin: 2.5rem 0;
}

/* ─── FOOTER ────────────────────────────────────────────────── */
footer {
  text-align: center;
  padding: 2rem;
  color: var(--muted);
  font-size: 0.85rem;
  border-top: 1px solid var(--border);
  margin-top: 4rem;
  position: relative;
  z-index: 1;
}

/* ─── ANIMATIONS ────────────────────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.fade-up { animation: fadeUp 0.5s ease both; }

/* Compatibility styles for the simplified solo-project HTML files */
.navbar .logo h1 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--text);
}

.hero-content h2,
.about-hero h2,
.search-section h2,
.saved-cities-section h2,
.chart-section h2,
.map-section h2 {
  font-family: var(--font-display);
  font-size: 2rem;
  margin-bottom: 1rem;
}

.explore-container,
.about-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
}

.search-section,
.weather-results,
.saved-cities-section,
.chart-section,
.map-section,
.about-hero,
.about-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.8rem;
  box-shadow: var(--shadow);
  margin-bottom: 1.5rem;
}

.search-box,
.save-city-row {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.search-box input,
.save-city-row input {
  flex: 1;
  min-width: 220px;
}

button,
.search-box button,
.save-city-row button,
.delete-city-btn {
  background: var(--accent);
  color: #0a0f1e;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.2rem;
  cursor: pointer;
  font-weight: 600;
}

button:hover,
.search-box button:hover,
.save-city-row button:hover {
  background: #6ab3ff;
}

.delete-city-btn {
  background: transparent;
  color: var(--danger);
  border: 1px solid rgba(248,113,113,0.3);
}

.weather-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
}

.weather-main-simple {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 1rem 0;
}

.weather-temp-simple {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 900;
  color: var(--accent);
  line-height: 1;
}

.saved-cities-list {
  display: grid;
  gap: 0.8rem;
}

.chart-section {
  min-height: 420px;
}

#weatherChart {
  width: 100%;
  height: 320px !important;
}

#map {
  width: 100%;
  height: 360px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  overflow: hidden;
}

.about-content {
  display: grid;
  gap: 1.5rem;
}

.about-card ul {
  padding-left: 1.2rem;
}

.placeholder {
  color: var(--muted);
}
