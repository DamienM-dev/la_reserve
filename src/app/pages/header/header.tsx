import styles from './header.module.css'

const nameOfRestaurant= "La reserve"
const activityOfRestaurant="Brasserie - AfterWork"


export default function Header() {
    return(
        <header className={styles.header}>
            <div>
                <p className={styles.logo}>{nameOfRestaurant}</p>
                <h1 className={styles.brasserie}>{activityOfRestaurant}</h1>
            </div>

            
                <div className={styles.burgerMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
          
        </header>
    )
    
}