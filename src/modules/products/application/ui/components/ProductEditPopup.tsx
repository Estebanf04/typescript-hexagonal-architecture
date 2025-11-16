import { useEffect, useState } from "react";
import type { Product } from "../../../domain/entities/Product";
import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../../../../categories/application/ui/hooks/useCategories";
import Modal from "../../../../../shared/components/Modal";

interface ProductEditPopupProps {
  onClose: () => void;
  product: Product;
}

const ProductEditPopup = ({ onClose, product }: ProductEditPopupProps) => {

  const { editProduct } = useProducts()
  const { getCategories, categories } = useCategories()

  const [newProductFormData, setNewProductFormData] = useState<Product>({ 
     id: product.id,
     name: product.name, 
     category: product.category, 
     price: product.price, 
     isActive: product.isActive 
  })

  const handleEditProduct = () => {
     editProduct(product.id, newProductFormData)
     onClose()
     setNewProductFormData({ id: "", name: "", category: "", price: 0, isActive: false })
  }

  useEffect(() => {
      getCategories()
  }, [])

  const disabledButton = newProductFormData.name.trim() === "" || newProductFormData.category.trim() === "" || newProductFormData.price <= 0;
    
  return (
    <Modal
    onClose={onClose}
    onConfirm={handleEditProduct}
    title="Editar producto"
    disableConfirmButton={disabledButton}
    >
        <div>
            <label className="block mb-2 text-sm font-medium">Nombre</label>
            <input 
            type="text"
            placeholder="Ingresa un nombre"
            className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white text-sm rounded-lg block px-4 py-2.5"
            value={newProductFormData.name}
            onChange={(e) => setNewProductFormData({ ...newProductFormData, name: e.target.value })}
            />
        </div>

        <div>
            <label className="block mb-2 text-sm font-medium">Categoria</label>
            <select 
            defaultValue={newProductFormData.category ? newProductFormData.category : ''}
            className="appearance-none w-full bg-white/10 border border-white/20 text-white text-sm rounded-lg block px-4 py-2.5 *:text-black"
            value={newProductFormData.category}
            onChange={(e) => setNewProductFormData({ ...newProductFormData, category: e.target.value })}
            >
                <option value="" disabled>Selecciona una categoria</option>
                        
                {categories.map(category => (
                    <option key={category.id} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="flex items-center *:w-full gap-x-4">
            <div>
                <label className="block mb-2 text-sm font-medium">Precio (€)</label>
                <input 
                type="number"
                placeholder="Precio del producto"
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white text-sm rounded-lg block px-4 py-2.5"
                value={newProductFormData.price}
                onChange={(e) => setNewProductFormData({ ...newProductFormData, price: Number(e.target.value) })}
                />
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium">Estado</label>
                <div className="bg-white/10 rounded-lg border border-white/20 p-1.5 space-x-4 text-sm *:w-full flex">
                    <button 
                    onClick={() => setNewProductFormData({ ...newProductFormData, isActive: true })} 
                    className={`font-semibold px-4 py-1 rounded-lg ${newProductFormData.isActive ? "bg-white/15 text-white" : "text-gray-100 cursor-pointer"}`}
                    >
                        Activo
                    </button>
                                  
                    <button 
                    onClick={() => setNewProductFormData({ ...newProductFormData, isActive: false })} 
                    className={`font-semibold px-4 py-1 rounded-lg ${!newProductFormData.isActive ? "bg-white/15 text-white" : "text-gray-100 cursor-pointer"}`}
                    >
                        Inactivo
                    </button>
                </div>
            </div>
        </div>
    </Modal>
  )
}

export default ProductEditPopup