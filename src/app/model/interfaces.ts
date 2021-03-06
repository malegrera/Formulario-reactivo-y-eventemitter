export interface Wine {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    isOnSale: boolean;
    quantityInCart: number;
    foodPairing: Food[];
}
export interface Food {
    name: string;
    kcal: number;
    vegan: boolean;
    gluten: boolean;
}
export interface WineQuantity {
    id: number;
    quantity: number;
}
