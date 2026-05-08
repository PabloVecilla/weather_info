import styles from "./WeatherCard.module.css"

export default function WeatherCard( { weather }) {
    const time = weather.dt_txt; 
    const day = time.split(" ")[0]; 
    const hour = time.split(" ")[1]; 
    const temp = Math.round(weather.main.temp); 
    const condition = weather.weather[0].main; 

    let image; 

    switch (condition) {
        case "Rain": 
            image = image = "https://images.stockcake.com/public/0/7/9/0796bd2f-b458-4d4a-b923-19fcd6d22146_large/stormy-rainy-sky-stockcake.jpg"; 
            break; 
        case "Clouds": 
            image = "data:image/jpeg;base64,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"
            break; 
        case "Clear": 
            image = "https://t3.ftcdn.net/jpg/00/68/79/54/360_F_68795433_fjQuxeXBgS8WwBimyZgFcfIFFA5pRacx.jpg"
            break; 

    }
    console.log(new Date().toLocaleDateString()); 
    return (
        <article className={styles.card_page}
                style={{backgroundImage:`url(${image})`,
                    color:"whitesmoke"
                }}>
            <h2>{temp} ºC</h2>
            <h3>{condition}</h3>
            <p className={styles.spaceBetween}>{day === (new Date().toISOString().split('T')[0])? "Today" : day}
            <span>{hour}</span>
            </p>

        </article>
    )
}