import styles from './footer.module.css'

import FlowersDecoration from "../components/FlowersDecorations";
import SocialMedia from "./components/SocialMedia";

const flowers = [
    {
        src:"/flowerDecoration/flower_footer.svg",
        alt:"Icone decorative d'une fleur",
        heigh:30,
        width:42,
        className:styles.flowerTop
    },
    {
        src:"/flowerDecoration/flower_footer.svg",
        alt:"Icone décorative d'une fleur",
        heigh:30,
        width:42,
        className:styles.flowerBottom 
    }
]

const socialMediaProps = [
    {
        src:"/socialMedia/Facebook_Logo_Primary.png",
        alt:"logo avec un lien facebook de La reserve",
        heigh:25,
        width:25,
        className:styles.logoFacebook
    },
    {
        src:"/socialMedia/Instagram_Glyph_Gradient.png",
        alt:"logo avec un lien facebook de La reserve",
        heigh:25,
        width:25, 
    }
]
const follow= "Suivez-nous !"
const copyright= "© copyright 2026 - Tout droit reservé | site réalisé par Damien Miremont"

export default function footer() {
    return(
        <footer className={styles.footerStyle}>
            <p className={styles.follow}>{follow}</p>
            <section className={styles.logo}>
                {
                    socialMediaProps.map(((logo, index) => (

                        <div key={index}>
                            <SocialMedia 
                            src={logo.src}
                            alt={logo.alt}
                            width={logo.width}
                            height={logo.heigh}
                            className={logo.className}
                            />
                        </div>
                    )))
                }
            </section>
            <section>
                <p className={styles.copyright}>{copyright}</p>
            </section>

            {
                flowers.map(((flower, index) => (

                    <div key={index}>
                        <FlowersDecoration 
                            src={flower.src}
                            alt={flower.alt}
                            height={flower.heigh}
                            width={flower.width}
                            className={flower.className}
                        />
                    </div>
                )))
            }
            

        </footer>
    )
}