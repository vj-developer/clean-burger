export type MenuCategory =
  | 'beef'
  | 'fried_chicken'
  | 'smashed_chicken'
  | 'premium'
  | 'loaded_fries'
  | 'combos';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in INR ₹
  image: string;
  category: MenuCategory;
  badge?: string; // e.g. "Bestseller", "Hot 🌶️", "Chef's Pick"
  isSpicy?: boolean;
  isVeg?: boolean;
  calories?: number;
  popular?: boolean;
}

export interface OutletSchedule {
  monThu: string;
  friSat: string;
  sunday: string;
}

export interface Outlet {
  id: string;
  name: string;
  tagline?: string;
  description?: string;
  address: string;
  phone: string;
  email?: string;
  hours: string;
  schedule?: OutletSchedule;
  image: string;
  status: 'Open Now' | 'Closing Soon' | 'Closed' | 'Coming Soon';
  mapQuery: string;
  mapUrl?: string;
}

export interface CustomizationOptions {
  pattyType: '100% Wagyu Beef' | 'Double Wagyu Beef' | 'Crispy Plant-Based Patty' | 'Spicy Jalapeño Chicken';
  bunType: 'Artisanal Brioche' | 'Sesame Seed Bun' | 'Gluten-Free Bun' | 'Lettuce Wrap';
  extraCheese: boolean;
  extraTruffleAioli: boolean;
  extraCrispyOnions: boolean;
  extraBaconBits: boolean;
  specialInstructions?: string;
}

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  quantity: number;
  customization: CustomizationOptions;
  itemTotal: number;
}

export type OrderStatus = 'placed' | 'grilling' | 'quality_check' | 'ready';

export interface Order {
  orderId: string;
  orderNumber: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  outlet: Outlet;
  deliveryType: 'pickup' | 'delivery';
  deliveryAddress?: string;
  status: OrderStatus;
  createdAt: string;
  estimatedTime: string;
}

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}
