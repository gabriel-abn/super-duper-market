import { Category } from "../../domain/Category";

export interface CategoryRepository {
  insert(category: Category): Promise<Category>;
  searchByID(bar_code: string): Promise<Category | null>;
}
