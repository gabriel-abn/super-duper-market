import { Category } from "../../../src/domain/Category";
import { InMemoryCategoryRepository } from "../../../src/application/repositories/in-memory-repos/InMemoryCategoryRepository";

describe("Use in memory category repository", () => {
  test("should be able to insert categories into in memory repository", async () => {
    const categoryRepo = new InMemoryCategoryRepository();

    const category = Category.create({
      category_id: "TEST1",
      name: "Insert category test",
      category_code: "INSERT1",
    });

    const response = await categoryRepo.insert(category);

    expect(response).toBeTruthy();
  });
});
