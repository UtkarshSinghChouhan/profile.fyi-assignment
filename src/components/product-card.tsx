import { cn } from "@/lib/utils";
import { IProduct } from "@/models/interfaces";
import Image from "next/image";
import Chip from "./chip";
import StarRatings from "react-star-ratings";
import Link from "next/link";
import Button from "./button";


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

        <h2 className="text-pf-dark-gray text-sm font-medium flex gap-2 items-center mt-3">
            {brandName} <Chip value={category as string} />
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

        <p>{price}</p>
        <p>{discountPercentage}</p>

        <Button variant="filled" size="full" className="mt-10">{`Add to cart`}</Button>

      </div>

    </div>
  );
};

export default ProductCard;
