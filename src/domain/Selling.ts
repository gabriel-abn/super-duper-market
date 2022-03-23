import { Entity } from "./core/Entity";

type SellingProps = {
  id: string;
  product_id: string;
  total_price: number;
  selling_date: string;
  seller_cpf: string;
};

export class Selling extends Entity<SellingProps> {
  private constructor(props: SellingProps, id?: string) {
    super(props, id);
  }

  static create(props: SellingProps, id?: string) {
    return new Selling({ ...props, id });
  }
}
