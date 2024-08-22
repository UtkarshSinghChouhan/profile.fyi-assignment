import { IButtonLoader } from "@/models/interfaces"
import Button from "../../atoms/button/button"
import Icon from "@/components/atoms/icon/icon"




const ButtonLoader = ({btnLoader, ...rest}: IButtonLoader) => {
  return (
     <Button {...rest}>
        <div className="flex h-full w-full items-center justify-center gap-2">
            {btnLoader && (
            <div className="-ml-1 h-5 w-5">
                <Icon icon="loader" />
            </div>
            )}
            <p className={`whitespace-nowrap transition-transform ${btnLoader ? 'translate-x-2' : 'translate-x-0'}`}>Add to cart</p>
        </div>
    </Button>
  )
}

export default ButtonLoader