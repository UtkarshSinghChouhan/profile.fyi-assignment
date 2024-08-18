import { ButtonVariant } from "./types";

export interface IProduct{
    id : string;
    brandName : string;
    productName : string;
    category : string;
    price : number;
    discountPercentage : number;
    productImage : string;
    quantity : number;
    rating?: number;
}

export interface IOption {
    label: string;
    value: string;
    link ?: string;
}


export interface IButton {
    children?: any;
    onClick?: Function;
    onBlur?: Function;
    isSubmit?: boolean;
    form?: string;
    disabled?: boolean;
    variant: ButtonVariant;
    padding?: 0 | 2 | 2.5 | 3;
    size?: 'auto' | 'full';
    weight?: 'normal' | 'medium';
    className ?: string;
}

export interface IButtonLoader extends IButton{
    btnLoader : boolean
}