import styles from './toGetInPage.module.css'
import FlowersDecoration from '../components/FlowersDecorations';

export default function ToGetInPage() {
    const title="Nous rejoinre";
    const adress ="Adresse:";
    const adressComplet ="7 bis Rue Camille Claudel, 56890 Plescop";
    const link="https://www.google.com/maps/dir//La+R%C3%A9serve,+7+bis+Rue+Camille+Claudel,+56890+Plescop,+France/@52.2129918,5.2793702,6z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4810191c41ada5a9:0x7e6575012571614f!2m2!1d-2.8003702!2d47.6786725?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D";
    const contact ="Nous appeler"

    const flowers = [
        {
            id:45,
            src:"/flowerDecoration/flower_get.svg",
            alt:"icone de fleurs décorative",
            height:49,
            width:20,
            className:styles.topFlower
        },
                {
            id:46,
            src:"/flowerDecoration/flower_get.svg",
            alt:"icone de fleurs décorative",
            height:115,
            width:46,
            className:styles.bottomFlower
        },

]
    return(
        <section className={styles.mainContainer}>
            <h2>{title}</h2>
            <div className={styles.containerAdress}>
                <span className={styles.adress}>{adress}</span>
                
                <p><a href={link} target="_blank" className={styles.link}>{adressComplet}</a></p>
            </div>
            <div>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1343.1507861483299!2d-2.8016789632069417!3d47.678562983005406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4810191c41ada5a9%3A0x7e6575012571614f!2sLa%20R%C3%A9serve%2C%207%20bis%20Rue%20Camille%20Claudel%2C%2056890%20Plescop%2C%20France!3m2!1d47.6786725!2d-2.8003701999999997!4m5!1s0x4810191c41ada5a9%3A0x7e6575012571614f!2sLa%20R%C3%A9serve%2C%207%20bis%20Rue%20Camille%20Claudel%2C%2056890%20Plescop%2C%20France!3m2!1d47.6786725!2d-2.8003701999999997!5e0!3m2!1sfr!2snl!4v1770897252517!5m2!1sfr!2snl" 
                    width= "100%" 
                    height="300"  
                    loading="lazy"></iframe>
            </div>
            <div className={styles.button}>
                <a>{contact}</a>
            </div>
            {
                flowers.map((flower => (
                    <div key={flower.id}>
                        <FlowersDecoration 
                            src={flower.src}
                            alt={flower.alt}
                            height={flower.height}
                            width={flower.width}
                            className={flower.className}
                        />
                    </div>

                )))
            }
            
        </section>
    )
}
