import { useEffect, useState } from "react";
import { useCategories } from "../hooks/useCategories";
import CategoryBody from "./CategoryBody";
import CategoryCreatePopup from "./CategoryCreatePopup";
import CategoryEditPopup from "./CategoryEditPopup";
import ConfirmModal from "../../../../../shared/components/ConfirmModal";
import TableStructure from "../../../../../shared/components/TableStructure";
import CreateButton from "../../../../../shared/components/CreateButton";

const CategoriesTable = () => {

  const { 
      getCategories, 
      setCategoryToEdit, 
      setCategoryIdToDelete, 
      deleteCategory,
      columnsOptions, 
      categoryToEdit, 
      categoryIdToDelete, 
    } = useCategories();
  
    const [openCreatePopup, setOpenCreatePopup] = useState(false);
  
    useEffect(() => {
        getCategories();
    }, []);

  return (
      <>
        <div className="space-y-3 fade-in">
            <div className="flex items-center justify-between">
               <h1 className="text-xl font-medium text-white">Lista de categorias</h1>
               <CreateButton onClick={() => setOpenCreatePopup(!openCreatePopup)} label="Crear categoria" />
            </div>

            <TableStructure columnsOptions={columnsOptions}>
                <CategoryBody />
            </TableStructure>
        </div>

        { openCreatePopup && <CategoryCreatePopup onClose={() => setOpenCreatePopup(false)}/> }
        { categoryToEdit && <CategoryEditPopup onClose={() => setCategoryToEdit(null)} category={categoryToEdit}/> }

        { categoryIdToDelete && ( 
            <ConfirmModal 
             onCancel={() => setCategoryIdToDelete(null)} 
             onConfirm={deleteCategory}
             title="Eliminar categoria"
             message="¿Estás seguro de que deseas eliminar esta categoria?"
             cta="Eliminar"
            /> 
        )}
      </>
  )
}

export default CategoriesTable