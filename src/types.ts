export interface MenuItem {
  id: string;
  name: string;
  category: 'burgers' | 'fries' | 'coffee' | 'shakes';
  price: number; // in PKR
  tag?: string;
  description: string;
  calories?: string;
  prepTime?: string;
  spiceLevel?: 0 | 1 | 2 | 3;
  rating: number;
  image: string; // Photorealistic product presentation with stark white background
  ingredients: string[];
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  selectedAddons?: string[];
  notes?: string;
}

export interface BranchInfo {
  name: string;
  area: string;
  address: string;
  hours: string;
  status: 'Open Now' | 'Opening at 4 PM';
  phone: string;
}
