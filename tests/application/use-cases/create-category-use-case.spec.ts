import { Category } from "../../../src/domain/Category";
import { InMemoryCategoryRepository } from "../../../src/application/repositories/in-memory-repos/InMemoryCategoryRepository";
import { CreateCategoryUseCase } from "../../../src/application/use-case/create-category-use-case";

describe("Create category", () => {
  test("should be able to create a category", async () => {
    const categoryRepo = new InMemoryCategoryRepository();

    const category = Category.create({
      category_id: "CAT_1",
      name: "Categoria 1",
      category_code: "CAT1",
    });

    categoryRepo.insert(category);

    const createCategoryUseCase = new CreateCategoryUseCase(categoryRepo);

    const response = await createCategoryUseCase.execute({
      name: category.props.name,
      category_code: category.props.category_code,
      category_id: category.props.category_id,
    });

    expect(response).toBeTruthy();
  });

  test("should not be able to create a category without an ID", async () => {
    const categoryRepo = new InMemoryCategoryRepository();

    const category = Category.create({
      name: "Category with ID",
      category_code: "CAT2",
      category_id: "CAT_ID",
    });

    const createCategoryUseCase = new CreateCategoryUseCase(categoryRepo);

    const response = await createCategoryUseCase.execute({
      category_id: category.props.category_id,
      name: category.props.name,
      category_code: category.props.category_code,
    });

    expect(response).toHaveProperty("props.category_id");
  });
});
