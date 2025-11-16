import EmptyRow from "../../../../../shared/components/EmptyRow";
import LoaderRow from "../../../../../shared/components/LoaderRow";
import { useProducts } from "../hooks/useProducts";
import ProductRow from "./ProductRow";

const ProductBody = () => {

  const { products, loading, columnsOptions } = useProducts();
    
  return (
    <tbody>
        {loading && (
            <LoaderRow 
            loaderText="Cargando productos..." 
            colLength={columnsOptions.length} 
            />
        )}

        {(products.length === 0 && !loading) && (
            <EmptyRow 
            emptyText="No hay productos disponibles" 
            colLength={columnsOptions.length} 
            />
        )}

        {(products.length > 0 && !loading ) && (
            products.map((product) => (
                <ProductRow key={product.id} product={product} />
            ))
        )}
    </tbody>
  )
}

export default ProductBody