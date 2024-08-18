import { Order } from "@/models/enums";
import { IOption } from "@/models/interfaces";

export interface IFilterData extends Partial<IOption> {
    sortBy: string;
    order: string;
}

export const SORT_BY: Array<IFilterData> = [
    {
        label: "Price, low to high",
        sortBy: "price",
        order: Order.ASCENDING
    },
    {
        label: "Price, high to low",
        sortBy: "price",
        order: Order.DESCENDING
    },
    {
        label: "Rating, high to low",
        sortBy: "rating",
        order: Order.DESCENDING
    },
    {
        label: "Rating, low to high",
        sortBy: "rating",
        order: Order.ASCENDING
    },
    {
        label: "Name, A-Z",
        sortBy: "title",
        order: Order.DESCENDING
    },
    {
        label: "Name, Z-A",
        sortBy: "title",
        order: Order.ASCENDING
    },
]