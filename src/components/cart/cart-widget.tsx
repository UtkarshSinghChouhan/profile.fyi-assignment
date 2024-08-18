import Link from "next/link"
import Icon from "../globals/icon"

const CartWidget = () => {
    return (
        <Link href={"/cart"} className="flex gap-2 items-center p-2 border rounded-full">
            <Icon icon="cart" />
            <span className="text-[12px] font-normal">34+</span>
        </Link>
    )
}

export default CartWidget