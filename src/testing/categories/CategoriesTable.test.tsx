import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import CategoriesTable from '../../modules/categories/application/ui/components/CategoriesTable'
import TableStructure from '../../shared/components/TableStructure'

const columnsOptions = [
    "Nombre de la categoria",
    "Descripcion",
    "Acción"
];

describe('CategoriesTable testing component', () => {

    test('CategoriesTable should show his title', () => {
        render(<CategoriesTable />)
        expect(screen.getByText('Lista de categorias')).toBeInTheDocument()
    })

    test('CategoriesTable should show create button', () => {
        render(<CategoriesTable />)
        expect(screen.getByText('Crear categoria')).toBeInTheDocument()
    })

    test('CategoriesTable should have the table structure', () => {
        render(<TableStructure columnsOptions={columnsOptions}><div></div></TableStructure>)

        expect(screen.getByRole('table')).toBeInTheDocument()
        expect(screen.getByRole('thead')).toBeInTheDocument()
        expect(screen.getByRole('tbody')).toBeInTheDocument()
    })

    test('CategoriesTable header should have correct columns', () => {
        render(<CategoriesTable />)

        columnsOptions.forEach(col => {
            expect(screen.getByText(col)).toBeInTheDocument()
        })
    })

})