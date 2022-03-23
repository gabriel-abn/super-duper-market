import faker from "@faker-js/faker";
import { InMemoryCategoryRepository } from "../../../src/application/repositories/in-memory-repos/InMemoryCategoryRepository";
import { InMemoryProductRepository } from "../../../src/application/repositories/in-memory-repos/InMemoryProductRepository";
import { InMemorySellingRepository } from "../../../src/application/repositories/in-memory-repos/InMemorySellingRepository";
import { Category } from "../../../src/domain/Category";
import { Product } from "../../../src/domain/Product";

describe("Make sellings using existing products", () => {
  it("should be able to register sellings with one or more products", () => {
    const productRepo = new InMemoryProductRepository();
    const categoryRepo = new InMemoryCategoryRepository();
    const sellingRepo = new InMemorySellingRepository();

    const category = Category.create({
      name: faker.name.jobArea(),
      category_code: "CAT1",
      category_id: "C123",
    });

    categoryRepo.insert(category);

    for (let index = 0; index < 5; index++) {
      const products = Product.create({
        id: faker.word.noun(10),
        category_code: "CAT1",
        bar_code: `ITEM${index}`,
        name: faker.name.title(),
        price: Number.parseInt(faker.finance.amount(0, 100)),
      });
      productRepo.insert(products);
    }
    // const selling =  Selling.create({
    //   id: ,
    //   product_id:,
    //   seller_cpf:,
    //   selling_date:,
    //   total_price:,
    // })
    // sellingRepo.insert()
  });
});
