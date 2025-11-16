export interface Category {
    id: string;
    name: string;
    description: string;
}

export type NewCategory = Omit<Category, 'id'>;