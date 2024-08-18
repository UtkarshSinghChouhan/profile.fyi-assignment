import { cn } from "@/lib/utils"
import { IProduct } from "@/models/interfaces"
import Image from "next/image"

const ProductCard = (product : Partial<IProduct>) => {

    const {id, brandName, productName, category, price, discountPercentage, productImage} = product


    return (
        <div>

            {/* Product Image */}
            <div className={cn("w-full h-96 relative bg-pf-image-bg")}>
                <Image 
                    src={productImage as string}
                    alt={id as string}
                    className="object-cover" 
                    fill 
                    loading="lazy" 
                />
            </div>


            {/* product Name */}

            <h1 className="text-productName font-bold">{productName}</h1>
            <h2 className="text-pf-gray font-semibold">{brandName}</h2>
            <p>{category}</p>

            <p>{price}</p>
            <p>{discountPercentage}</p>

        </div>
    )
}

export default ProductCard