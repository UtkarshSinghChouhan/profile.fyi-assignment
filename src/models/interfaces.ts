export interface IProduct{
    id : string;
    brandName : string;
    productName : string;
    category : string;
    price : number;
    discountPercentage : number;
    productImage : string;
    quantity : number
}

export interface IOption {
    label: string;
    value: string;
}