import type { Category } from "../../../domain/entities/Category";
import type { CategoryRepository } from "../../../domain/repositories/CategoryRepository";

export function get(repository: CategoryRepository) : Category[] {
    return repository.get();
}