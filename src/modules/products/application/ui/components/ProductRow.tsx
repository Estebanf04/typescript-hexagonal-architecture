import ActionColumnTableButtons from "../../../../../shared/components/ActionColumnTableButtons";
import type { Product } from "../../../domain/entities/Product"
import { useProducts } from "../hooks/useProducts";

interface ProductRowProps {
    product: Product
}

const ProductRow = ({ product }: ProductRowProps) => {

  const { setProductToEdit, setProductIdToDelete } = useProducts();

  return (
    <>
        <tr className="bg-slate-400/35 font-medium border-b border-white/10 hover:bg-slate-400/30">
            <th scope="row" className="px-6 py-4 whitespace-nowrap">
                {product.name}
            </th>
            <td className="px-6 py-4">
                {product.category}
            </td>
            <td className="px-6 py-4">
                ${product.price}
            </td>
            <td className="px-6 py-4">
                <span className={ product.isActive ? "bg-green-300 border border-green-400 text-green-800 text-xs font-medium px-4 py-1 rounded-full dark:bg-green-900 dark:text-green-300" : "bg-red-300 border border-red-400 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full dark:bg-red-900 dark:text-red-300"}>
                    {product.isActive ? "ACTIVO" : "INACTIVO"}
                </span>
            </td>

            <ActionColumnTableButtons
            onEdit={() => setProductToEdit(product)}
            onDelete={() => setProductIdToDelete(product.id)}
            />
        </tr>
    </>
  )
}

export default ProductRow