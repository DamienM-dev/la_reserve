import styles from "./servicesPage.module.css"
import CardsService from "./components/CardsServices"
import FlowersDecoration from "../components/FlowersDecorations"

const namePageService = "Service"

// FLOWERS DECORATION COMPONENT
const flowerContainerServices = {
  src: "/flowerDecoration/flowerServiceContainer.svg",
  alt: "Décoration fleurale",
  width: 40,
  height: 86,
}

// CARDS COMPONENT
export const cards = [
  {
    id: 1,
    title: "Cuisine traditionnelle et produits fraits",
    subTitle: "Carte change toutes les 2 semaines",
    imagePath: "/cuisine.png",
    imageAlt: "image illustrative d'un plat",
    button: "Voir la carte",
  },
  {
    id: 2,
    title: "Apéros gourmands",
    subTitle: "Planche à partage et cocktails maison",
    imagePath: "/planche.svg",
    imageAlt: "image illustrative d'un plateau apéro",
    button: "Voir la carte",
  },
  {
    id: 3,
    title: "Soirées et évenements",
    subTitle: "Privatisation possible",
    imagePath: "/fete.svg",
    imageAlt:
      "image illustrative d'un symbole d'événement organisé dans le restaurant",
    button: "Réserver",
  },
]

export default function ServicesPages() {
  return (
    <main className={styles.mainService}>
      <div className={styles.blockNameService}>
        <div>
          <FlowersDecoration
            src={flowerContainerServices.src}
            alt={flowerContainerServices.alt}
            height={flowerContainerServices.height}
            width={flowerContainerServices.width}
            className={styles.flowerPosition}
          />
        </div>

        <div className={styles.blockTitle}>
          <h2 className={styles.titleServices}>{namePageService}</h2>
        </div>

        <FlowersDecoration
          src={flowerContainerServices.src}
          alt={flowerContainerServices.alt}
          height={flowerContainerServices.height}
          width={flowerContainerServices.width}
          className={styles.flowerRotation}
        />
      </div>

      {cards.map((card) => (
        <CardsService
          key={card.id}
          id={card.id}
          title={card.title}
          subTitle={card.subTitle}
          imagePath={card.imagePath}
          imageAlt={card.imageAlt}
          button={card.button}
        />
      ))}
    </main>
  )
}