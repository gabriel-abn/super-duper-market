import { Product } from "../../../domain/Product";
import { ProductRepository } from "../ProductRepository";

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  async insert(product: Product): Promise<Product> {
    this.products.push(product);

    return product;
  }

  async findByBarCode(product_barCode: string): Promise<Product> {
    const product = this.products.find((find) => {
      if (find.props.bar_code == product_barCode) {
        return find;
      }
    });
    if (!product) {
      throw new Error("Method not implemented.");
    }

    return product;
  }
}
