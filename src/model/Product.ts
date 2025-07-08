export interface Product {
  id: string | number;
  image: string;
  images?: string[]; // Mảng các hình ảnh cho gallery
  thumbnails?: string[]; // Mảng các thumbnail cho gallery
  title: string;
  rating: number;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  category?: string;
  description?: string;
  inStock?: boolean;
  tags?: string[];
  colors?: ProductColor[]; // Các màu sắc có sẵn
  sizes?: string[]; // Các kích cỡ có sẵn
  brand?: string;
  sku?: string; // Mã sản phẩm
  material?: string;
  care?: string[]; // Hướng dẫn chăm sóc sản phẩm
  features?: string[]; // Tính năng nổi bật của sản phẩm
  reviews?: ProductReview[]; // Đánh giá sản phẩm
  relatedProducts?: number[] | string[]; // ID của các sản phẩm liên quan
}

export interface ProductColor {
  name: string;
  value: string; // Mã màu hex hoặc tên màu
  image?: string; // Hình ảnh sản phẩm với màu này
}

export interface ProductReview {
  id: string | number;
  user: string;
  rating: number;
  date: string;
  comment: string;
  helpful?: number; // Số người thấy đánh giá này hữu ích
} 