export interface IProduct {
  id: number;
  name: string;
  description: string;
  defaultImage: string;
  images: string[];
  price: number;
  discount: number;
}

export interface ICard {
  id: number;
  products: Array<{ id: number; quantity: number }>;
}
