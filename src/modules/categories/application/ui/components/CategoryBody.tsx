import EmptyRow from "../../../../../shared/components/EmptyRow";
import LoaderRow from "../../../../../shared/components/LoaderRow";
import { useCategories } from "../hooks/useCategories";
import CategoryRow from "./CategoryRow";


const CategoryBody = () => {

  const { categories, loading, columnsOptions } = useCategories();
    
  return (
    <tbody>
        {loading && (
            <LoaderRow 
            loaderText="Cargando productos..." 
            colLength={columnsOptions.length} 
            />
        )}

        {(categories.length === 0 && !loading) && (
            <EmptyRow 
            emptyText="No hay categorias disponibles" 
            colLength={columnsOptions.length} 
            />
        )}

        {(categories.length > 0 && !loading) && (
            categories.map((category) => (
                <CategoryRow key={category.id} category={category} />
            ))
        )}
    </tbody>
  )
}

export default CategoryBody