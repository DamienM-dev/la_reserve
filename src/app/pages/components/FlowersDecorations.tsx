import styles from './flowersStyle.module.css'
import Image from "next/image"

type flowersDecorationProps = {
    src:string,
    alt:string,
    width:number,
    height:number,
    className?:string,
}

export default function FlowersDecoration({
    src, alt, width, height, className}:flowersDecorationProps) {
    return(
        <div className={styles.blockFlower}>
            <Image 
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={className}
            />
        
        </div>

    )
}