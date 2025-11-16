import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import ProductsTable from '../../modules/products/application/ui/components/ProductsTable'
import TableStructure from '../../shared/components/TableStructure'

const columnsOptions = [
    "Nombre del producto",
    "Categoria",
    "Precio",
    "Estado",
    "Acción"
];

describe('ProductsTable testing component', () => {

    test('ProductsTable should show his title', () => {
        render(<ProductsTable />)
        expect(screen.getByText('Lista de productos')).toBeInTheDocument()
    })

    test('ProductsTable should show create button', () => {
        render(<ProductsTable />)
        expect(screen.getByText('Crear producto')).toBeInTheDocument()
    })

    test('ProductsTable should have the table structure', () => {
        render(<TableStructure columnsOptions={columnsOptions}><div></div></TableStructure>)

        expect(screen.getByRole('table')).toBeInTheDocument()
        expect(screen.getByRole('thead')).toBeInTheDocument()
        expect(screen.getByRole('tbody')).toBeInTheDocument()
    })

    test('ProductsTable header should have correct columns', () => {
        render(<ProductsTable />)

        columnsOptions.forEach(col => {
            expect(screen.getByText(col)).toBeInTheDocument()
        })
    })

})