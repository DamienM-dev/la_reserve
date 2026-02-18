import styles from './sliderRestaurant.module.css'

import ImageSlider from './components/slider'

export default function sliderRestaurant() {
    return(
        <section className={styles.containerSlider}>
            <div>
                <ImageSlider />
            </div>
        </section>
    )
}