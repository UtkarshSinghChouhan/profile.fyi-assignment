import { Utils } from "@/lib/utils"

interface IProductHeader{
    filter :string
}

const ProductHeader = ({filter} : IProductHeader) => {
  return (
    <div className="text-center pb-10 text-[50px] font-semibold w-full">
        {filter ? Utils.cleanCategoryString(filter) : "ALL PRODUCTS"}
    </div>
  )
}

export default ProductHeader