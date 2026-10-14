import styles from "./Form.module.css"
export default function Form ({ handleSubmit, search, setSearch, city }) {
    return (
        <section className={styles.form_page}>
            <form  onSubmit={handleSubmit} >
                <input type="search" 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={search ? search : city}/>
                <button type="submit">🔎</button>
            </form>
        </section>
    )
}