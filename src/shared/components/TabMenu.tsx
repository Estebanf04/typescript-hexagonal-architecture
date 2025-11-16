import { useTabMenu } from "../hooks/useTabMenu"

const TabMenu = () => {

  const { selectedTab, setSelectedTab } = useTabMenu()

  return (
    <div className="flex justify-center">
        <div className="bg-white/15 rounded-full p-1.5 space-x-4 text-sm">
            <button 
            onClick={() => setSelectedTab("products")} 
            className={`font-semibold px-6 py-2 rounded-full ${selectedTab === "products" ? "bg-white/15 text-white" : "text-gray-100 cursor-pointer"}`}
            >
                Gestion de productos
            </button>
                  
            <button 
            onClick={() => setSelectedTab("categories")} 
            className={`font-semibold px-6 py-2 rounded-full ${selectedTab === "categories" ? "bg-white/15 text-white" : "text-gray-100 cursor-pointer"}`}
            >
                Gestion de categorias
            </button>
        </div>
    </div>
  )
}

export default TabMenu