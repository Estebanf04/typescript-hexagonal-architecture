import { useState } from "react";
import type { Category } from "../../../domain/entities/Category";
import { useCategories } from "../hooks/useCategories";
import Modal from "../../../../../shared/components/Modal";

interface CategoryEditPopupProps {
  onClose: () => void;
  category: Category;
}

const CategoryEditPopup = ({ onClose, category }: CategoryEditPopupProps) => {

  const { editCategory } = useCategories()

  const [newCategoryFormData, setNewCategoryFormData] = useState<Category>({ 
     id: category.id,
     name: category.name, 
     description: category.description, 
  })

  const handleEditCategory = () => {
     editCategory(category.id, newCategoryFormData)
     onClose()
     setNewCategoryFormData({ id: "", name: "", description: "" })
  }

  const disabledButton = newCategoryFormData.name.trim() === "" || newCategoryFormData.description.trim() === "";

  return (
    <Modal
    onClose={onClose}
    onConfirm={handleEditCategory}
    title="Editar categoria"
    disableConfirmButton={disabledButton}
    >
      <div>
          <label className="block mb-2 text-sm font-medium">Nombre</label>
          <input 
          type="text"
          placeholder="Ingresa un nombre"
          className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white text-sm rounded-lg block px-4 py-2.5"
          value={newCategoryFormData.name}
          onChange={(e) => setNewCategoryFormData({ ...newCategoryFormData, name: e.target.value })}
          maxLength={25}
          />
     </div>

     <div>
         <label className="block mb-2 text-sm font-medium">Descripción</label>
         <input 
         type="text"
         placeholder="Haz una descripción de esta categoria"
         className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white text-sm rounded-lg block px-4 py-2.5"
         value={newCategoryFormData.description}
         onChange={(e) => setNewCategoryFormData({ ...newCategoryFormData, description: e.target.value })}
         maxLength={50}
         />
     </div>
    </Modal>
  )
}

export default CategoryEditPopup