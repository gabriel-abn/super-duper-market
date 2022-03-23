import { Product } from "../../domain/Product";

export interface ProductRepository {
  insert(product: Product): Promise<Product>;
  findByBarCode(product_barCode: string): Promise<Product | null>;
}
