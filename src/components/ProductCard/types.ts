export interface Product {
  id: string | number;
  image: string;
  title: string;
  rating: number;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  category?: string;
  description?: string;
  inStock?: boolean;
  tags?: string[];
} 