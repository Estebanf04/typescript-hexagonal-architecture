// import { v4 as uuidv4 } from "uuid";
import type { ProductRepostitory } from "../domain/repositories/ProductRepository";
import type { NewProduct, Product } from "../domain/entities/Product";
import { v4 as uuidv4 } from "uuid";

export function createLocalStorageProductRepository() : ProductRepostitory {
    return {
        get: getAll,
        create,
        delete: removeProduct,
        update
    }
}

function getAll() : Product[] {
    const products = getProductsFromLocalStorage();
    return Array.from(products.values());
}

function create(newProduct: NewProduct) : void {
    const products = getProductsFromLocalStorage();

    const productCreated : Product = {
        ...newProduct,
        id: uuidv4()
    }

    products.set(productCreated.id, productCreated);
    localStorage.setItem('products', JSON.stringify(Array.from(products.entries())));
}

function update(productId: string, updatedProduct: Product) : void {
    const products = getProductsFromLocalStorage();
    products.set(productId, updatedProduct);
    localStorage.setItem('products', JSON.stringify(Array.from(products.entries())));
}

function getProductsFromLocalStorage(): Map<string, Product> {
    const productsJson = localStorage.getItem('products');

    if(!productsJson) {
        return new Map();
    }

    const map = new Map(JSON.parse(productsJson) as Iterable<[string, Product]>);
    return map;
}

function removeProduct(productId: string) : void {
    const products = getProductsFromLocalStorage();
    products.delete(productId);
    localStorage.setItem('products', JSON.stringify(Array.from(products.entries())));
}