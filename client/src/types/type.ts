export interface ProductState {
    id: number | null,
    name: string,
    price: number | null,
    category: string
}

export type TFormSearch = {
    search: string
}

export enum CategoryEnum {
    fruit = "fruit",
    vegetable = "vegetable"
}

export enum PriceEnum {
    ASC = "ASC",
    DESC = "DESC"
}

export type TFormSort = {
    category: CategoryEnum,
    price: PriceEnum
}