export type VariantItem = {
  volume?: string;
  unit?: string;
  price: number;
};

export type Categories =
  | 'desserts'
  | 'signatureTea'
  | 'coffee'
  | 'drinks'
  | 'snacks'
  | 'hookahs'
  | 'pastes'
  | 'mainCourses'
  | 'burgers'
  | 'sauces'
  | 'tea'
  | 'alcohol';

export type FoodItem = {
  id: string;
  name: string;
  category: Categories;
  variants: VariantItem[];
  description?: string;
  ingredients?: string;
  kind?: string[];
};
