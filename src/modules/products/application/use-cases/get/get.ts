import type { Product } from "../../../domain/entities/Product";
import type { ProductRepostitory } from "../../../domain/repositories/ProductRepository";

export function get(repository: ProductRepostitory) : Product[]{
    return repository.get();
}