import { useEffect, useState } from "react"
import "./App.css"
import Form from "./components/Form/Form.jsx"
import LayoutDefault from "../template/LayoutDefault/LayoutDefault"
import axios from "axios"; 
import WeatherList from "./components/WeatherList/WeatherList.jsx";

const key = import.meta.env.VITE_WEATHER_API_KEY; 

const groupWeatherDataByDay = async (weatherData) => {
    if (!weatherData) return []; 
    const grouped = weatherData.reduce((acc, item) => {
        const dateKey = item.dt_txt.split(" ")[0]; 
        if (!acc[dateKey]) {
            acc[dateKey] = [];
        }
        acc[dateKey].push(item);
        return acc;
    }, {})
    return Object.keys(grouped).map((date) => ({
        date, 
        slots: grouped[date]
    }));
}; 

const getWeatherData = async (city) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`); 
        
        return await groupWeatherDataByDay(response.data.list); 
    } catch (e){
        console.error(e); 
    }
}; 

function App() {
    const [city, setCity] = useState("Madrid"); 
    const [cities, setCities] = useState(["Madrid"]); 
    const [search, setSearch] = useState(""); 
    const [forecast, setForecast] = useState([]); 
    const [error, setError] = useState(""); 

    useEffect(() => {
        const loadWeather = async () => {
            try {
                setError(""); 
                const data = await getWeatherData(city); 

                setForecast(data); // --> stores data in forecast. 
            } catch (e) {
                console.error(e); 
                setError("Unable to load weather data"); 
            }
        } 
        loadWeather(); 
    }, [city]); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim() === "") return; 

        setCity(search);  // --> stores search from input in city; 
        setCities((prev)=> {
            if (prev.includes(search)) return prev; 
            return [...prev, search]})
        setSearch(""); 
     }; 

     useEffect (() => {
        const savedCities = JSON.parse(localStorage.getItem("cities")); 
        if (savedCities) setCities(savedCities); 
    }, []); // --> on first render, search for savedCities in localeStorage
    
    useEffect(() => {
        localStorage.setItem("cities", JSON.stringify(cities)); 
    }, [cities]) // --> store searched cities in localeStorage; 

    const dateTime = new Date().getHours(); 
    const isDaytime = dateTime > 6 && dateTime < 19; 

    return (
        <LayoutDefault cities={cities}
                        setCity={setCity} >
            <main className={isDaytime ? "isDaytime" : "isNighttime"}>
                
                <Form search={search}
                      setSearch={setSearch}
                      handleSubmit={handleSubmit} 
                      city={city}
                      />

                {error && <p>{error}</p>}

                <WeatherList forecast={forecast} />

                
            </main>
        </LayoutDefault>
    ); 
}
export default App; 