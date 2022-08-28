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

export interface QandA extends Record<string, any> {
  question: string;
  answer: string;
  date: string;
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
}
