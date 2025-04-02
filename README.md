# 🌦️ Weather App

A modern, fully responsive weather application built using **React**, **Vite**, and the **OpenWeatherMap API**. This app allows users to search for weather in any city and view real-time data including temperature, humidity, wind speed, and weather icons. 

By default, the app automatically initializes with weather data for **Australia** on launch. It also supports keyboard search, displays clickable search history (up to 5 recent cities), and includes clean, mobile-friendly styling.

---

## 🚀 Features

- 🔍 Search weather by city
- 🌤️ Displays:
  - Temperature (°F)
  - Humidity (%)
  - Wind speed (mph)
- 🖼️ Live weather icons from OpenWeatherMap
- ⌨️ Search using Enter key or search icon
- 🕘 Clickable recent search history (max 5 cities)
- 📱 Responsive design for all screen sizes
- 🔐 Secure API key using `.env`

---

## 📦 Tech Stack

- **Frontend**: React + Vite
- **Styling**: HTML & CSS (custom styles)
- **API**: OpenWeatherMap API
- **JavaScript**: ES6+ syntax

---

## 🧠 App Behavior

### Search Functionality

```jsx
<input
  ref={inputRef}
  type="text"
  placeholder="Search"
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      search(inputRef.current.value);
    }
  }}
/>
<img
  src={search_icon}
  alt="search"
  onClick={() => search(inputRef.current.value)}
/>
```

---

### Search History Logic

Each successful search is added to an array:

```js
setSearchHistory((prevHistory) => {
  const formattedCity = city.trim();
  if (!prevHistory.includes(formattedCity)) {
    return [formattedCity, ...prevHistory].slice(0, 5);
  }
  return prevHistory;
});
```

---

## 🛠️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/ihsanbed/weather-app.git
cd weather-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

In the root of your project:

```bash
touch .env
```

Inside `.env`:

```env
VITE_APP_ID=your_openweathermap_api_key_here
```

> You can get your API key from: https://openweathermap.org/api

### 4. Run the App

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to see it live!

---

## 📸 Screenshots

> You can replace these with your own screenshots later

```markdown
![Search Feature](./assets/screenshot-1.png)
![Weather Display](./assets/screenshot-2.png)
```

---

## 🌐 Live Demo

Coming soon — deploy the app to Netlify, Vercel, or GitHub Pages and paste the link here.

---

## 🙋‍♂️ Author

**Ihsan Bedru**  
📧 ihsanbed@gmail.com  
🐙 [GitHub – ihsanbed](https://github.com/ihsanbed)

---

## 📄 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

## 💡 Future Improvements

- 🌡️ Toggle between Fahrenheit and Celsius
- 🌍 Auto-detect user location (geolocation support)
- 🗺️ Weather maps integration
- 💾 Persistent search history via localStorage
- 🔔 Error toast notifications instead of alerts
- 🌐 Internationalization (multi-language support)
- 🌙 Dark mode toggle
- 🧠 AI-powered weather recommendations 😉

---

Made with 💙 by **Ihsan Bedru**
