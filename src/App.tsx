import { ToastContainer } from "react-toastify"
import CategoriesTable from "./modules/categories/application/ui/components/CategoriesTable"
import ProductsTable from "./modules/products/application/ui/components/ProductsTable"
import TabMenu from "./shared/components/TabMenu"
import { useTabMenu } from "./shared/hooks/useTabMenu"

function App() {

  const { selectedTab } = useTabMenu()

  return (
    <>
      <ToastContainer position="top-right" autoClose={3500} hideProgressBar />
      <div className="h-screen max-w-7xl mx-auto p-8 space-y-6 overflow-hidden fade-in">
          <h1 className="text-center text-white text-2xl font-semibold italic">
              Arquitectura hexagonal con <span className="text-blue-400 font-bold">TypeScript</span>
          </h1>

          <TabMenu />

          {selectedTab === "products" && <ProductsTable />}
          {selectedTab === "categories" && <CategoriesTable />}
      </div>
    </>
  )
}

export default App
