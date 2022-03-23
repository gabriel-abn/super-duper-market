import { Category } from "../../../domain/Category";
import { CategoryRepository } from "../CategoryRepository";

export class InMemoryCategoryRepository implements CategoryRepository {
  public categories: Category[] = [];

  async insert(category: Category): Promise<Category> {
    this.categories.push(category);

    return category;
  }

  async searchByID(bar_code: string): Promise<Category | null> {
    const category = this.categories.find(
      (category) => category.props.category_code == bar_code,
    );

    if (!category) {
      throw new Error("Category not found");
    }

    return category;
  }
}
