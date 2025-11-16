import type { NewCategory } from "./Category";

function validateCategoryName(name: string) : boolean {
    return name.trim().length > 0 && name.length <= 25;
}

function validateCategoryDescription(description: string) : boolean {
    return description.trim() !== "" && description.length <= 50;
}


export function ensureValidateCategory(data: NewCategory) : {  valid: boolean, error?: string } {
    try {
        if (!validateCategoryName(data.name)) {
            throw new Error("Nombre de categoria inválido");
        }

        if (!validateCategoryDescription(data.description)) {
            throw new Error("Descripción de categoria inválida");
        }

        return { valid: true };
    } catch (error) {
        return { valid: false, error: error instanceof Error ? error.message : 'Se ha encontrado un error' };
    }
}