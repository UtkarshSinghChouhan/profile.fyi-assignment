import { cn } from "@/lib/utils";
import { IProduct } from "@/models/interfaces";
import Image from "next/image";
import Chip from "../globals/chip";
import StarRatings from "react-star-ratings";
import Link from "next/link";
import { addToCart } from "@/lib/appwrite/actions/shopping-cart.actions";
import ButtonLoader from "../buttons/button-loader";
import { useState } from "react";
import ProductPrice from "./product-price";


const ProductCard = (product: Partial<IProduct>) => {
  const {
    id,
    brandName,
    productName,
    category,
    price,
    discountPercentage,
    productImage,
    rating,
  } = product;

  const [btnLoader, setBtnLoader] = useState<boolean>(false)


  const addToCartHandler = async() => {
    setBtnLoader(true)

    try{
        const product = {
            id,
            brandName,
            productName,
            category,
            price,
            discountPercentage,
            productImage,
            quantity : 1,
        } as IProduct
    
        await addToCart(product)
        // Show Toast

    }catch(err){
        console.error(err)
    }finally{
        setBtnLoader(false)
    }


  }

  return (
    <div>
      {/* Product Image */}
      <div className={cn("w-full h-44 xl:h-96 overflow-hidden relative bg-pf-image-bg")}>
        <Image
          src={productImage as string}
          alt={id as string}
          className="object-cover hover hover:scale-105 transition-transform duration-500"
          fill
          loading="lazy"
        />
      </div>

        {/* Product Description */}
      <div className=" pt-5">

        {/* Product Name */}
        <Link href={`/products/${id}`} className="flex flex-col group w-fit">
            <h1
            className="text-productName font-bold line-clamp-1"
            title={productName}
            >
            {productName}
            </h1>
            <div className="w-0 group-hover:w-full h-[1px] bg-black transition-[width]" />
        </Link>

        {/* BrandName */}
        <h2 className="text-pf-dark-gray text-sm font-medium flex justify-between xl:justify-normal xl:gap-2 items-center mt-3">
          <p className="line-clamp-1">
            {brandName} 
          </p>
          <Chip value={category as string} />
        </h2>

        {/* Rating */}
        <StarRatings
            rating={rating}
            starRatedColor="#000000"
            starEmptyColor="#EBEBEB"
            numberOfStars={5}
            starDimension={`15px`}
            starSpacing={`3px`}
            name="rating"
        />

        <ProductPrice price={price} discountPercentage={discountPercentage} />


        <ButtonLoader variant="filled" size="full" className="mt-10" onClick={addToCartHandler} disabled={btnLoader} btnLoader={btnLoader}>
          {`Add to cart`}
        </ButtonLoader>


      </div>

    </div>
  );
};

export default ProductCard;
