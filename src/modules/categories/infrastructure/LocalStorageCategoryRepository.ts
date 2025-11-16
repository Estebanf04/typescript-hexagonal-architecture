import type { Category, NewCategory } from "../domain/entities/Category";
import type { CategoryRepository } from "../domain/repositories/CategoryRepository";
import { v4 as uuidv4 } from "uuid";

export function createLocalStorageCategoryRepository() : CategoryRepository {
    return {
        create,
        get: getAll,
        delete: removeCategory,
        update
    }
}

function create(category: NewCategory) : void {
    const categories = getCategoriesFromLocalStorage();

    const categoryCreated : Category = { 
        ...category, 
        id: uuidv4() 
    };

    categories.set(categoryCreated.id, categoryCreated);
    localStorage.setItem('categories', JSON.stringify(Array.from(categories.entries())));
}

function getAll() : Category[] {
    const categories = getCategoriesFromLocalStorage();
    return Array.from(categories.values());
}

function update(categoryId: string, updatedCategory: Category) : void {
    const categories = getCategoriesFromLocalStorage();
    categories.set(categoryId, updatedCategory);
    localStorage.setItem('categories', JSON.stringify(Array.from(categories.entries())));
}

function getCategoriesFromLocalStorage(): Map<string, Category> {
    const categoriesJson = localStorage.getItem('categories');

    if(!categoriesJson) {
        return new Map();
    }

    const map = new Map(JSON.parse(categoriesJson) as Iterable<[string, Category]>);
    return map;
}

function removeCategory(categoryId: string) : void {
    const categories = getCategoriesFromLocalStorage();
    categories.delete(categoryId);
    localStorage.setItem('categories', JSON.stringify(Array.from(categories.entries())));
}