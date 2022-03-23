import { InMemoryCategoryRepository } from "../../../src/application/repositories/in-memory-repos/InMemoryCategoryRepository";
import { InMemoryProductRepository } from "../../../src/application/repositories/in-memory-repos/InMemoryProductRepository";
import { CreateProductUseCase } from "../../../src/application/use-case/create-product-use-case";
import { Category } from "../../../src/domain/Category";
import { Product } from "../../../src/domain/Product";
import { CategoryCodeValidator } from "../../../src/validator/category-code-validator";

describe("Create product with existing category", () => {
  it("should be able to create product inside existing category", async () => {
    const categoryRepo = new InMemoryCategoryRepository();
    const productRepo = new InMemoryProductRepository();

    const category_exist = Category.create({
      name: "Product Category",
      category_code: "ABC1",
      category_id: "123",
    });
    const categoryRes = await categoryRepo.insert(category_exist);

    const product = Product.create({
      id: "PR1",
      bar_code: "PROD123",
      category_code: "ABC1",
      name: "Product",
      price: 20.99,
    });

    if (!(await new CategoryCodeValidator(categoryRepo).validate(product))) {
      throw new Error("Category does not exist");
    }

    const response = new CreateProductUseCase(productRepo, categoryRepo);

    expect(
      await response.execute({
        bar_code: product.props.bar_code,
        category_code: product.props.category_code,
        id: product.props.id,
        name: product.props.name,
        price: product.props.price,
      }),
    ).toBeInstanceOf(Product);
  });
});
