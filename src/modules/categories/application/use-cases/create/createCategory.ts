import type { NewCategory } from "../../../domain/entities/Category";
import { ensureValidateCategory } from "../../../domain/entities/ValidateCategory";
import type { CategoryRepository } from "../../../domain/repositories/CategoryRepository";


export function create(repository: CategoryRepository, newCategory: NewCategory) {
    
    const validation = ensureValidateCategory(newCategory);

    if (!validation.valid) {
        throw new Error(validation.error);
    }

    return repository.create(newCategory);
}