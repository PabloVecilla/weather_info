import styles from "./Header.module.css"; 
import { useState } from "react";

function Header ({ cities, setCity }) {
    const [ open, setOpen ] = useState(false); 

    return (
        <header >
            <nav className={styles.header_page} >
                <ul>
                    <h1>Weather Info</h1>
                    <li onClick={() => setOpen(!open)}>
                        My cities
                        {open && (
                            <ul className={styles.citiesList}>
                                {cities.map((city) => (
                                    <li key={city}
                                        onClick={() => setCity(city)} >
                                        {city}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header; 