import type { Product } from "../../../domain/entities/Product";
import { ensureValidateProduct } from "../../../domain/entities/ValidateProduct";
import type { ProductRepostitory } from "../../../domain/repositories/ProductRepository";

export function updateProduct(repository: ProductRepostitory, productId: string, updatedProduct: Product) {
    
    const validation = ensureValidateProduct(updatedProduct);

    if (!validation.valid) {
        throw new Error(validation.error);
    }

    return repository.update(productId, updatedProduct);
}