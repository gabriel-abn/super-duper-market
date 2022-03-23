import { Category } from "../../domain/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";

type CreateCategoryRequestDTO = {
  category_id: string;
  name: string;
  category_code: string;
};
export class CreateCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(category: CreateCategoryRequestDTO) {
    const createdCategory = Category.create(category);

    if (!createdCategory) {
      throw new Error("Unable to create category.");
    }

    return createdCategory;
  }
}
