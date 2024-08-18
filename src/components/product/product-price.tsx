import { IProduct } from "@/models/interfaces"

const ProductPrice = ({price, discountPercentage} : Partial<IProduct>) => {
  return (
    <div className="flex gap-2 items-center my-1">
        <p className="font-medium text-base">{`$${price}`}</p>
        <p className="text-value text-red-500 mt-[2px]">{`${discountPercentage}%`}</p>
    </div>
  )
}

export default ProductPrice