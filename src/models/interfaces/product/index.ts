export interface IProduct {
  type: string;
  id: string;
  cant_selected?: number;
  attributes: {
    name: string;
    price: number;
    special_price?: number;
    status: boolean;
    image_medium_url: string;
    special_price_expiration_date?: string;
    special_price_starting_date?: string;
  };
}

export interface IProductInitial {
  data: Array<IProduct>;
}
