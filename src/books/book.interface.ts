export interface BaseBook {
  name: string;
  price: number;
  description: string;
  author: string;
}

export interface Book extends BaseBook {
  id: number;
}
