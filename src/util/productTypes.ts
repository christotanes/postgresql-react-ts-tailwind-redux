export type Products = {
  id: number;
  name: string;
  description: string;
  price: number;
  created_at: string;
  category: string;
};

export type ProductsGetResponse = Products[];
