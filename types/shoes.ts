export type Thumbnail = {
  id: number;
  img: string;
};
export type Benefits = {
  id: number;
  text: string;
};

export type Sizes = {
  id: number;
  size: string;
  is_available: boolean;
};

export type Shoe = {
  id: number;
  img: string;
  name: string;
  price: number;
  color: string;
  quantity: number;
  slug: string;
  thumbnails: Thumbnail[];
  overview: string;
  benefits: Benefits[];
  sizes: Sizes[];
  product_information: { text: string };
  selectedSize?: string;
};


