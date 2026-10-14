import styles from "./Header.module.css"; 
import { useState, useEffect, useRef } from "react";

function Header ({ cities, setCity }) {
    const [ open, setOpen ] = useState(false); 
    const dropdownRef = useRef(null); 

    useEffect(() => { // close menu on "esc" keyDown
        if (!open) return;
    
        const handleKeyDown = (event) => {
          if (event.key === "Escape") {
            setOpen(false);
          }
        };
    
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
      }, [open]);

    // Close dropdown on outside click
    useEffect(() => {
        if(!open) return;

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return (
        <header >
            <nav className={styles.header_page} >
                <h1>Weather Info</h1>
                <div ref={dropdownRef} className={styles.dropdownContainer}>
                    <button type="button" disabled={cities?.length === 0} onClick={() => setOpen(!open)}>
                        My cities
                    </button>
                    {open && (
                        <ul className={styles.citiesList}>
                            {cities?.map((city) => (
                                <li key={city}
                                    onClick={() =>{ setCity(city); setOpen(false);}} 
                                > {city}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header; 