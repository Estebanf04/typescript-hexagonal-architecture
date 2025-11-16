import type { CategoryRepository } from "../../../domain/repositories/CategoryRepository";

export function remove(repository: CategoryRepository, categoryId: string) {
    return repository.delete(categoryId);
}