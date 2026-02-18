
import styles from '../commentary.module.css'

// COMPONENT

import ImagesFlorale from './ImagesFlorale'

//TYPE TS

const imageCards = {
    path: "/flowerReview.svg",
    alt:"Décoration fleurale",
    height:66,
    width:33, 
}
//TODO

//TRANSFORMER IMAGE EN COMPOSANT

const google="Google"
const note = "4,7/ 5 sur"
const nbrOfReview ="basé sur"
const nbr ="79 avis"
const review ="“ Super adresse découverte un peu par hasard. Concept simple et cuisine de qualité ! Tout est super bon, cest agréable davoir des produits frais pour un concept...”"

export default function CardCommentary() {
    

    return(
        <div className={styles.cardsCommentary}>
            <div className={styles.blockNote}>
                <div className={styles.blockImage}>
                    <ImagesFlorale 
                    src={imageCards.path}
                    alt={imageCards.alt}
                    height={imageCards.height}
                    width={imageCards.width} 
                    />

                </div>

                <div className={styles.reviewContainer}>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className={styles.star}>
                        <path
                            d="M12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21
                            12 17.27 18.18 21l-1.64-7.03
                            L22 9.24l-7.19-.61L12 2z"/>
                        </svg>
                    </div>
                <div className={styles.blockReview}>
                    <p>{note} <span className={styles.googleWord}>{google}</span></p>
                    <p>{nbrOfReview} <span className={styles.googleWord}>{nbr}</span></p>
                </div>
                </div>

            </div>

            <div>
                <p className={styles.reviewParagraph}>{review}</p>
            </div>
        </div>
    )
}