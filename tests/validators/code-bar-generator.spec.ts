import { InMemoryCategoryRepository } from "../../src/application/repositories/in-memory-repos/InMemoryCategoryRepository";
import { InMemoryProductRepository } from "../../src/application/repositories/in-memory-repos/InMemoryProductRepository";
import { Category } from "../../src/domain/Category";
import { Product } from "../../src/domain/Product";
import { BarCodeGenerator } from "../../src/validator/generate-product-bar-code";

describe("Product code bar generation", () => {
  it("should generate the code bar from product name", async () => {
    const codeBar = new BarCodeGenerator();

    const categoryRepo = new InMemoryCategoryRepository();
    const productRepo = new InMemoryProductRepository();

    const category = Category.create({
      category_code: "CAT09",
      category_id: "1234",
      name: "Category test",
    });
    const product = Product.create({
      bar_code: codeBar.generate("Aymore"),
      category_code: category.props.category_code,
      id: "",
      name: "Biscoito Aymoré",
      price: 1.9,
    });

    const responseCategory = await categoryRepo.insert(category);
    const responseProduct = await productRepo.insert(product);

    expect(responseCategory).toBeInstanceOf(Category);
    expect(responseProduct).toHaveProperty("props.bar_code");
  });
});
