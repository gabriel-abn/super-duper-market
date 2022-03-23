import { Entity } from "./core/Entity";

type ProductProps = {
  id: string;
  name: string;
  bar_code: string;
  price: number;
  category_code: string;
};

export class Product extends Entity<ProductProps> {
  private constructor(props: ProductProps, id?: string) {
    super(props, id);
  }

  public static create(props: ProductProps, id?: string) {
    return new Product({ ...props, id });
  }
}
