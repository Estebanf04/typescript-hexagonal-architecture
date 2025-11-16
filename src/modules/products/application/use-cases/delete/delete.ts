import type { ProductRepostitory } from "../../../domain/repositories/ProductRepository";

export function remove(repository: ProductRepostitory, productId: string) {
    return repository.delete(productId);
}