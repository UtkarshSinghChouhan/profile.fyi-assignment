import Icon from "./icon"

const CartWidget = () => {
    return (
        <button className="flex gap-2 items-center p-2 border rounded-full">
            <Icon icon="cart" />
            <span className="text-[12px] font-normal">34+</span>
        </button>
    )
}

export default CartWidget