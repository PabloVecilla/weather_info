import Footer from "../../src/components/Footer/Footer"
import Header from "../../src/components/Header/Header"
import styles from "./LayoutDefault.module.css"

function LayoutDefault ({children, cities, setCity}) {

  return (
  <div className={styles['layout-wrapper']}> 
    <Header  cities={cities} 
              setCity={setCity} />
      {children}
    <Footer />
  </div>
  )
}

export default LayoutDefault