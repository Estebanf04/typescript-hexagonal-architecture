import type { NewProduct } from "./Product";

function validateProductName(name: string) : boolean {
    return name.trim().length > 0 && name.length <= 30;
}

function validateProductCategory(category: string) : boolean {
    return category.trim() !== "";
}

function validateProductPrice(price: number) : boolean {
    return price >= 0;
}

export function ensureValidateProduct(data: NewProduct) : {  valid: boolean, error?: string } {
    try {
        if (!validateProductName(data.name)) {
            throw new Error("Nombre de producto inválido");
        }

        if (!validateProductCategory(data.category)) {
            throw new Error("Categoría de producto inválida");
        }

        if (!validateProductPrice(data.price)) {
            throw new Error("Precio de producto inválido");
        }

        return { valid: true };
    } catch (error) {
        return { valid: false, error: error instanceof Error ? error.message : 'Se ha encontrado un error' };
    }
}