/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";
import type { Category, NewCategory } from "../../../domain/entities/Category";
import { createLocalStorageCategoryRepository } from "../../../infrastructure/LocalStorageCategoryRepository";
import { toast } from "react-toastify";
import { get } from "../../use-cases/get/getCategories";
import { create } from "../../use-cases/create/createCategory";
import { remove } from "../../use-cases/delete/deleteCategory";
import { updateCategory } from "../../use-cases/update/editCategory";

const columnsOptions = [
    "Nombre de la categoria",
    "Descripcion",
    "Acción"
];

export interface ContextState {
    categories: Category[],
    categoryToEdit: Category | null,
    categoryIdToDelete: string | null,
    loading: boolean,
    columnsOptions: string[],
    getCategories: () => void,
    createCategory: (newCategory: NewCategory) => void,
    deleteCategory: () => void,
    setCategoryToEdit: React.Dispatch<React.SetStateAction<Category | null>>
    editCategory: (categoryId: string, updatedCategory: Category) => void
    setCategoryIdToDelete: React.Dispatch<React.SetStateAction<string | null>>
}

export const CategoryContext = createContext({} as ContextState);

export const CategoryContextProvider = ({children} : {children: React.ReactNode}) => {

    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(false);
    const [categoryToEdit, setCategoryToEdit] = useState<Category | null>(null);
    const [categoryIdToDelete, setCategoryIdToDelete] = useState<string | null>(null);

    const categoryRepository = createLocalStorageCategoryRepository();

    function getCategories() {
        setLoading(true);
        const data = get(categoryRepository);
        setCategories(data);        
        setLoading(false);
    }

    function createCategory(newCategory: NewCategory) {
        try {
            create(categoryRepository, newCategory)    
            getCategories()
            toast.success("Categoria creada correctamente");
        } catch (error) {
            if(error instanceof Error){
                toast.error(error.message);
            }
        }
    }

    function deleteCategory() {
        if(!categoryIdToDelete) return;

        try {
            remove(categoryRepository, categoryIdToDelete)
            getCategories()
            toast.success("Categoria eliminada correctamente");
        } catch (error) {
            if(error instanceof Error){
                toast.error('Error al eliminar la categoria');
            }
        }
    }

    function editCategory(categoryId: string, updatedCategory: Category) {
        try {
            updateCategory(categoryRepository, categoryId, updatedCategory)
            getCategories()
            toast.success("Categoria actualizada correctamente");
        } catch (error) {
            if(error instanceof Error){
                toast.error(error.message);
            }
        }
    }

    return (
        <CategoryContext.Provider value={{ 
            categories,
            categoryIdToDelete,
            loading,
            columnsOptions,
            categoryToEdit,
            getCategories,
            createCategory,
            deleteCategory,
            setCategoryToEdit,
            setCategoryIdToDelete,
            editCategory
        }}>
            {children}
        </CategoryContext.Provider>
    );
};
