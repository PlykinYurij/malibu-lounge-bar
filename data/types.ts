export type VariantItem = {
    volume?: string;
    unit?: string;
    price: number
}

export type Categories = 'desserts' | 'tea' | 'coffee' | 'drinks' | 'snacks' | 'hookahs' | 'pastes' | 'burgers' | 'sauces'

export type FoodItem = {
    id: string;
    name: string;
    category: Categories
    variants: VariantItem[]
    description?: string;
    ingredients?: string[];
}