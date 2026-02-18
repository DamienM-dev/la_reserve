import Image from "next/image";

type imageFloraleProps = {
    idFlower?:string,
    src:string,
    alt:string,
    height:number,
    width:number,
    className?:string
}


export default function imagesFlorale( {
    idFlower,src, alt, height, width,className
}: imageFloraleProps) {
    return(
        <Image
            id={idFlower}
            src={src}
            alt={alt}
            height={height}
            width={width}
            className={className}
             />

    
    )
}