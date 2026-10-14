import WeatherCard from "../WeatherCard/WeatherCard";
import styles from "./WeatherList.module.css?v=2";
import { useState } from "react";

export default function WeatherList ( { forecast } ) {
    const [ currentIndex, setCurrentIndex ] = useState(0); 
    // Get the active day object
    const activeDay = forecast[currentIndex];

    // Access slots safely
    const activeSlots = activeDay?.slots || [];

    if (!forecast || forecast.length === 0) return <p>No data available</p>;

    return (
        <main className={styles.weatherList_page}>
            <div className={styles.prevNextContainer}>
                <button disabled={currentIndex <= 0} onClick={() => setCurrentIndex((prev) => prev - 1)}> « </button>
                <span>{currentIndex === 0 ? "Today" : currentIndex === 1 ? "Tomorrow" :activeDay.date}</span>
                <button disabled={currentIndex >= forecast.length - 1} onClick={() => setCurrentIndex((prev) => prev + 1)}><b> » </b> </button>
            </div>
            <div className={styles.weatherCardContainer}>
                {activeSlots.map((item) => (
                    <WeatherCard key={item.dt}
                                weather={item} 
                    />)
                )}
            </div>
        </main>
    )
}; 