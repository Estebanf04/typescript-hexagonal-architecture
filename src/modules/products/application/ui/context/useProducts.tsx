/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";
import type { NewProduct, Product } from "../../../domain/entities/Product";
import { createLocalStorageProductRepository } from "../../../infrastructure/ProductsLocalStorage";
import { get } from "../../use-cases/get/get";
import { create } from "../../use-cases/create/create";
import { remove } from "../../use-cases/delete/delete";
import { toast } from "react-toastify";
import { updateProduct } from "../../use-cases/update/update";

const columnsOptions = [
    "Nombre del producto",
    "Categoria",
    "Precio",
    "Estado",
    "Acción"
];

export interface ContextState {
    products: Product[],
    productToEdit: Product | null,
    productIdToDelete: string | null,
    loading: boolean,
    columnsOptions: string[],
    getProducts: () => void,
    createProduct: (newProduct: NewProduct) => void,
    deleteProduct: () => void,
    setProductToEdit: React.Dispatch<React.SetStateAction<Product | null>>
    editProduct: (productId: string, updatedProduct: Product) => void
    setProductIdToDelete: React.Dispatch<React.SetStateAction<string | null>>
}

export const ProductContext = createContext({} as ContextState);

export const ProductContextProvider = ({children} : {children: React.ReactNode}) => {

    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false);
    const [productToEdit, setProductToEdit] = useState<Product | null>(null);
    const [productIdToDelete, setProductIdToDelete] = useState<string | null>(null);

    const productRepository = createLocalStorageProductRepository();

    function getProducts() {
        setLoading(true);
        const data = get(productRepository);
        setProducts(data);        
        setLoading(false);
    }

    function createProduct(newProduct: NewProduct) {
        try {
            create(productRepository, newProduct)    
            getProducts()
            toast.success("Producto creado correctamente");
        } catch (error) {
            if(error instanceof Error){
                toast.error(error.message);
            }
        }
    }

    function deleteProduct() {
        if(!productIdToDelete) return;

        try {
            remove(productRepository, productIdToDelete)
            getProducts()
            toast.success("Producto eliminado correctamente");
        } catch (error) {
            if(error instanceof Error){
                toast.error('Error al eliminar el producto');
            }
        }
    }

    function editProduct(productId: string, updatedProduct: Product) {
        try {
            updateProduct(productRepository, productId, updatedProduct)
            getProducts()
            toast.success("Producto actualizado correctamente");
        } catch (error) {
            if(error instanceof Error){
                toast.error(error.message);
            }
        }
    }

    return (
        <ProductContext.Provider value={{ 
            products,
            productIdToDelete,
            loading,
            columnsOptions,
            productToEdit,
            getProducts,
            createProduct,
            deleteProduct,
            setProductToEdit,
            setProductIdToDelete,
            editProduct
        }}>
            {children}
        </ProductContext.Provider>
    );
};
