import type { NewProduct, Product } from "../entities/Product";

export interface ProductRepostitory {
    get: () => Product[];
    create: (product: NewProduct) => void;
    update: (productId: string, product: Product) => void;
    delete: (productId: string) => void;
}