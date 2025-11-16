import ActionColumnTableButtons from "../../../../../shared/components/ActionColumnTableButtons";
import type { Category } from "../../../domain/entities/Category";
import { useCategories } from "../hooks/useCategories";

interface CategoryRowProps {
    category: Category
}

const CategoryRow = ({ category }: CategoryRowProps) => {

  const { setCategoryToEdit, setCategoryIdToDelete } = useCategories();

  return (
    <>
        <tr className="bg-slate-400/35 font-medium border-b border-white/10 hover:bg-slate-400/30">
            <th scope="row" className="px-6 py-4 whitespace-nowrap">
                {category.name}
            </th>
            <td className="px-6 py-4">
                {category.description}
            </td>

            <ActionColumnTableButtons 
            onEdit={() => setCategoryToEdit(category)}
            onDelete={() => setCategoryIdToDelete(category.id)}
            />
        </tr>
    </>
  )
}

export default CategoryRow