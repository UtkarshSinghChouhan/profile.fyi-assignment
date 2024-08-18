import Link from "next/link"
import Icon from "../globals/icon"

const CartWidget = () => {
    return (
        <Link href={"/cart"} className="flex gap-2 items-center p-2 border dark:border-pf-darktheme-border rounded-full">
            <Icon icon="cart" />
            <span className="text-[12px] font-normal dark:text-pf-darktheme-text-header">34+</span>
        </Link>
    )
}

export default CartWidget