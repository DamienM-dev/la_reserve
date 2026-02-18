import styles from "./cardsServices.module.css"
import Image from "next/image"
import ImagesFlorale from "../../commentary/Components/ImagesFlorale"

type CardsServiceProps = {
  id: number
  title: string
  subTitle: string
  imagePath: string
  imageAlt: string
  button: string
}

type Flower = {
  idFlower: string
  src: string
  alt: string
  height: number
  width: number
  className: string
}

const flowers: Flower[] = [
  // Card 1
  {
    idFlower: "1",
    src: "/flowerDecoration/flower_cook_left.svg",
    alt: "icone décorative d'une fleur",
    height: 33,
    width: 50,
    className: styles.imageFlowerPosition,
  },
  {
    idFlower: "1",
    src: "/flowerDecoration/flower_cook_right.svg",
    alt: "icone décorative d'une fleur",
    height: 53,
    width: 40,
    className: styles.imageFlowerBottomLeft,
  },

  // Card 2
  {
    idFlower: "2",
    src: "/flowerDecoration/flower_apero_middle.svg",
    alt: "icone décorative d'une fleur",
    height: 38,
    width: 40,
    className: styles.imageFlowerMiddleLeft,
  },
  {
    idFlower: "2",
    src: "/flowerDecoration/flower_apero_middle.svg",
    alt: "icone décorative d'une fleur",
    height: 38,
    width: 40,
    className: styles.imageFlowerMiddleRight,
  },

  // Card 3
  {
    idFlower: "3",
    src: "/flowerDecoration/flower_evenement_top.svg",
    alt: "icone décorative d'une fleur",
    height: 95,
    width: 20,
    className: styles.imageFlowerTopLeft,
  },
  {
    idFlower: "3",
    src: "/flowerDecoration/flower_evenement_top.svg",
    alt: "icone décorative d'une fleur",
    height: 95,
    width: 20,
    className: styles.imageFlowerTopRight,
  },
]

export default function CardsService({
  id,
  title,
  subTitle,
  imagePath,
  imageAlt,
  button,
}: CardsServiceProps) {
  const flowersForThisCard = flowers.filter((f) => f.idFlower === String(id))

  return (
    <article className={styles.cardsServices}>
      <h3 className={styles.titleCardsServices}>{title}</h3>
      <h4 className={styles.subTitle}>{subTitle}</h4>

      <Image src={imagePath} alt={imageAlt} height={80} width={80} />

      <div className={styles.blockButton}>
        <span className={styles.containerButton}>
          <a>{button}</a>
        </span>
      </div>

      <div className={styles.containerFlower}>
        {flowersForThisCard.map((flower, index) => (
          <ImagesFlorale
            key={`${flower.idFlower}-${index}`}
            idFlower={flower.idFlower}
            src={flower.src}
            alt={flower.alt}
            height={flower.height}
            width={flower.width}
            className={flower.className}
          />
        ))}
      </div>
    </article>
  )
}
