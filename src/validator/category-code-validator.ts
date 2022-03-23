import { CategoryRepository } from "../application/repositories/CategoryRepository";
import { Product } from "../domain/Product";

export class CategoryCodeValidator {
  constructor(private categoryRepo: CategoryRepository) {}

  async validate(product: Product): Promise<boolean | Error> {
    if (!this.categoryRepo.searchByID(product.props.category_code)) {
      return new Error("Invalid category");
    }

    return true;
  }
}
