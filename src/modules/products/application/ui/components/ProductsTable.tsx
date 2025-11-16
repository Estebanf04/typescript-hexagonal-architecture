import { useEffect, useState } from "react";
import ProductCreatePopup from "./ProductCreatePopup";
import { useProducts } from "../hooks/useProducts";
import ProductBody from "./ProductBody";
import ProductEditPopup from "./ProductEditPopup";
import ConfirmModal from "../../../../../shared/components/ConfirmModal";
import TableStructure from "../../../../../shared/components/TableStructure";
import CreateButton from "../../../../../shared/components/CreateButton";

const ProductsTable = () => {

  const { 
    getProducts, 
    setProductToEdit, 
    setProductIdToDelete, 
    deleteProduct,
    columnsOptions, 
    productToEdit, 
    productIdToDelete, 
  } = useProducts();

  const [openCreatePopup, setOpenCreatePopup] = useState(false);

  useEffect(() => {
      getProducts();
  }, []);

  return (
    <>
        <div className="space-y-3 fade-in">
            <div className="flex items-center justify-between">
               <h1 className="text-xl text-white font-medium">Lista de productos</h1>
               <CreateButton onClick={() => setOpenCreatePopup(!openCreatePopup)} label="Crear producto" />
            </div>

            <TableStructure columnsOptions={columnsOptions}>
                <ProductBody />
            </TableStructure>
        </div>

        { openCreatePopup && <ProductCreatePopup onClose={() => setOpenCreatePopup(false)}/> }
        { productToEdit && <ProductEditPopup onClose={() => setProductToEdit(null)} product={productToEdit}/> }

        { productIdToDelete && ( 
            <ConfirmModal 
             onCancel={() => setProductIdToDelete(null)} 
             onConfirm={deleteProduct}
             title="Eliminar producto"
             message="¿Estás seguro de que deseas eliminar este producto?"
             cta="Eliminar"
            /> 
        )}
    </>
  )
}

export default ProductsTable