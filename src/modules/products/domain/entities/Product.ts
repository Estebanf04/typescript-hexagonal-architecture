export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    isActive: boolean;
}

export type NewProduct = Omit<Product, "id">;