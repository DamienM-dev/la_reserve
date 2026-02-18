import styles from './commentary.module.css'
import CardCommentary from "./Components/CardCommentary";


export default function commentary() {
   
    return(
        <article className={styles.containerCommentary}>
    <CardCommentary />        
        </article>
    )
}