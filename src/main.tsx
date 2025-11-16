import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TabMenuContextProvider } from './shared/context/useTabMenu.tsx'
import { ProductContextProvider } from './modules/products/application/ui/context/useProducts.tsx'
import { CategoryContextProvider } from './modules/categories/application/ui/context/useCategories.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TabMenuContextProvider>
        <CategoryContextProvider>
            <ProductContextProvider>
                <App />
            </ProductContextProvider>
        </CategoryContextProvider>
    </TabMenuContextProvider>
  </StrictMode>,
)
