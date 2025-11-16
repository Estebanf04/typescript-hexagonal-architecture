import type { Category, NewCategory } from "../entities/Category";

export interface CategoryRepository {
    get: () => Category[];
    create: (category: NewCategory) => void;
    update: (categoryId: string, category: Category) => void;
    delete: (categoryId: string) => void;
}