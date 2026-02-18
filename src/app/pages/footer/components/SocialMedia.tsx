import Image from "next/image"

type socialMediaProps = {
    src:string,
    alt:string,
    height:number,
    width:number
    className?:string
}

export default function SocialMedia( {src, alt, height, width, className}:socialMediaProps) {
    return (
        <Image 
            src={src}
            alt={alt}
            height={height}
            width={width}
            className={className}
        />
    )
}