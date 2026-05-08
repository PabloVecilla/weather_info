import WeatherCard from "../WeatherCard/WeatherCard"
import styles from "./WeatherList.module.css"
export default function WeatherList ( { forecast } ) {

    return (
        <div className={styles.weatherList_page}>
            {forecast.map((item) => (
            <WeatherCard key={item.dt}
                        weather={item} 
            />)
            )}
        </div>
    )
}