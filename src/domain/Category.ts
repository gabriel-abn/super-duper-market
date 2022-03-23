import { Entity } from "./core/Entity";

type CategoryProps = {
  category_id: string;
  name: string;
  category_code: string;
};

export class Category extends Entity<CategoryProps> {
  private constructor(props: CategoryProps, id?: string) {
    super(props, id);
  }

  static create(props: CategoryProps, id?: string) {
    return new Category({ ...props }, id);
  }
}
