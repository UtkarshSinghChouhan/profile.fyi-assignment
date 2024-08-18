'use server'

import Image from "next/image"
import { getImage } from "@/lib/image-utils"
import { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export interface IDynamicImage extends ImageProps { 
    className ?: string;
}

const DynamicImage = async({className, ...rest} : IDynamicImage) => {

    try {
        const {src} = rest as ImageProps
        const { base64 } = await getImage(src as string);


        return (
            <div className={cn("w-full h-96 relative bg-pf-image-bg", className)}>
                <Image 
                    // {...img} 
                    {...rest}
                    className="object-cover" 
                    fill 
                    loading="lazy" 
                    placeholder="blur"
                    blurDataURL={base64}
                />
            </div>
        );
    } catch (error) {
        console.error("Error in DynamicImage:", error);
        return null; // Optionally render a fallback UI here
    }
}

export default DynamicImage