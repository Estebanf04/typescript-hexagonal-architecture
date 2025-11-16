import type { NewProduct } from "../../../domain/entities/Product";
import { ensureValidateProduct } from "../../../domain/entities/ValidateProduct";
import type { ProductRepostitory } from "../../../domain/repositories/ProductRepository";

export function create(repository: ProductRepostitory, newProduct: NewProduct) {
    
    const validation = ensureValidateProduct(newProduct);

    if (!validation.valid) {
        throw new Error(validation.error);
    }

    return repository.create(newProduct);
}