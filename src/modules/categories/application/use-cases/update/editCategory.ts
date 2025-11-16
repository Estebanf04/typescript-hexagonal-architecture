import type { Category } from "../../../domain/entities/Category";
import { ensureValidateCategory } from "../../../domain/entities/ValidateCategory";
import type { CategoryRepository } from "../../../domain/repositories/CategoryRepository";


export function updateCategory(repository: CategoryRepository, categoryId: string, updatedCategory: Category) {
    
    const validation = ensureValidateCategory(updatedCategory);

    if (!validation.valid) {
        throw new Error(validation.error);
    }

    return repository.update(categoryId, updatedCategory);
}