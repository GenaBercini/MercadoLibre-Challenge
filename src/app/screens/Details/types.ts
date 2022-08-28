export interface ProductPicture extends Record<string, any> {
  id: string;
  url: string;
}

export interface OtherProduct extends Record<string, any> {
  id: number;
  url: string;
  title: string;
  price: number;
}
export interface Comment extends Record<string, any> {
  title: string;
  comment: string;
  date: string;
  id: number;
}
export interface MercadoShop extends Record<string, any> {
  store: string;
  title: string;
  price: number;
  url: string;
}
export interface PromoteProduct extends Record<string, any> {
  url: string;
  price: number;
  title: string;
}
export interface QandA extends Record<string, any> {
  question: string;
  answer: string;
  date: string;
}
export interface Rating extends Record<string, any> {
  stars: string;
  value: number;
  people: number;
}

export interface Product extends Record<string, any> {
  id?: string;
  title?: string;
  price?: number;
  currency_id?: string;
  sold_quantity?: number;
  condition?: string;
  otherProducts?: OtherProduct[];
  pictures?: ProductPicture[];
  comments?: Comment[];
  mercadoShop?: MercadoShop[];
  promoteProducts?: PromoteProduct[];
  rating?: Rating[];
}
