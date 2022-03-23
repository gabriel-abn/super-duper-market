import { Product } from "../../domain/Product";
import { CategoryCodeValidator } from "../../validator/category-code-validator";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { ProductRepository } from "../repositories/ProductRepository";

type CreateProductRequestDTO = {
  id: string;
  name: string;
  bar_code: string;
  price: number;
  category_code: string;
};
export class CreateProductUseCase {
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
  ) {}

  async execute(product: CreateProductRequestDTO) {
    const newProduct = Product.create(product);
    const validator = new CategoryCodeValidator(this.categoryRepository)
      .validate(newProduct)
      .catch((err) => {
        throw new Error(err);
      });

    this.productRepository.insert(newProduct);

    return newProduct;
  }
}
