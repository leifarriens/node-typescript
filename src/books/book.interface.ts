export interface BaseBook {
  name: string;
  price: number;
  description: string;
  authors: string[];
}

export interface Book extends BaseBook {
  id: number;
}
