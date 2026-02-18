import FlowersDecoration from '../components/FlowersDecorations'
import styles from './hourPage.module.css'

const hoursTitle ="Nos horaires"
const midi="Midi:"
const hoursMidi ="lundi au samedi à partir de 12h"
const night="Soir:"
const hoursNight= "vendredi et samedi à partir de 18h"

const flower= 
  {  
    src:"./flowerDecoration/flower_hours.svg",
    alt:"Icone de décoration fleurale",
    height:28,
    width:135,
}


export default function hourPage() {
    return (
        <article className={styles.mainContainer}>
            <h2>{hoursTitle}</h2>
            <section className={styles.firstSection}>
                <span>{midi}</span>
                <div>{hoursMidi}</div>
            </section>
            <section className={styles.secondSection}>
                <span>{night}</span>
                <div>{hoursNight}</div>
            </section>
            <FlowersDecoration
                src={flower.src}
                alt={flower.alt}
                height={flower.height}
                width={flower.width}
                className={styles.flower} 
            />
            
        </article>
    )
} 