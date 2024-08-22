import StarRatings from "react-star-ratings";

const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Product Image */}
      <div className="w-full min-h-96 relative bg-pf-light-gray"></div>

      {/* Product Description */}
      <div className=" pt-5">
        {/* Product Name */}
        <div className={`flex flex-col items-start justify-start gap-2`}>
          <div className="h-[10px] w-28 rounded-full bg-pf-light-gray dark:bg-fs-darktheme-bg-light" />
          <div className="h-[10px] w-36 rounded-full bg-pf-light-gray dark:bg-fs-darktheme-bg-light" />
        </div>

        {/* Category */}
        <div className={`flex flex-col items-start justify-start gap-2 mt-3`}>
          <div className="h-[10px] w-28 rounded-full bg-pf-light-gray dark:bg-fs-darktheme-bg-light" />
          <div className="h-[10px] w-36 rounded-full bg-pf-light-gray dark:bg-fs-darktheme-bg-light" />
        </div>

        {/* Rating */}
        <StarRatings
          rating={3}
          starRatedColor="#c8c7c7"
          starEmptyColor="#EBEBEB"
          numberOfStars={5}
          starDimension={`15px`}
          starSpacing={`3px`}
          name="rating"
        />

        {/* Price */}
        <div className={`flex flex-col items-start justify-start gap-2 my-1`}>
          <div className="h-[10px] w-28 rounded-full bg-pf-light-gray dark:bg-fs-darktheme-bg-light" />
          <div className="h-[10px] w-36 rounded-full bg-pf-light-gray dark:bg-fs-darktheme-bg-light" />
        </div>

        {/* Button */}
        <div className="min-h-[46px] bg-pf-light-gray mt-8" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
