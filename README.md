# 🌤️ Weather Info App

A React weather application that displays a 5-day forecast (3-hour intervals) based on user-selected cities.

## 🔗 Live Demo

https://dont-forget-to-change-this.com

## 🚀 Features

- 🔍 Search weather by city
- 📍 Default forecast for Madrid on first load
- 📅 Grouped forecast by day
- ⏱️ Hourly weather details (temperature, condition, time)
- 🧠 Smart city list (saved searches)
- ♻️ Dynamic updates using React state and useEffect

---

## 🛠️ Tech Stack

- React (Vite)
- JavaScript (ES6+)
- Axios
- OpenWeather API
- UUID (for list keys)

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/PabloVecilla/weather_info 
```

2. Navigate to the project: 
```bash
cd weather-app
```
3. Install dependencies: 
```bash
npm install
```
4. create a .env file in the root: 
```env
VITE_WEATHER_API_KEY=your_api_key_here
```
5. Start the dev server: 
```bash
npm run dev
```

## API
This project uses the OpenWeather 5-day / 3-hour forecast API.

Example request:
```
https://api.openweathermap.org/data/2.5/forecast?q=London&appid=YOUR_API_KEY&units=metric
```

## 🧠 Key Concepts Practiced
- React state managment (useState)
- Side effects and data fetching (useEffect)
- Controlled forms
- Component composition
- Data transformation (grouping by day)
- Conditional rendering
- Lifting state up
- Props and data flow

## 📁 Project Structure
src/
  components/
    WeatherList/
    WeatherCard/
    Form/
  App.jsx

## 🔄 App Flow
1. App loads with default city ("Madrid")
2. useEffect fetches weather data
3. Data is stored in state (forecast)
4. WeatherList groups data by day
5. WeatherCard displays hourly data
6. User can:
  - Search for a city
  - Select from saved cities
7. App updates and re-fetches automatically

## 💡 Future Improvements
- 🌙 Day/Night background based on time
- 📍 Geolocation support
- 💾 LocalStorage for saved cities
- ⚡ Caching API responses
- 📱 Improved responsive design

## 👨‍💻 Author
Hecho con ❤️ por Paolo

## 📄 License
This project is for educational purposes.