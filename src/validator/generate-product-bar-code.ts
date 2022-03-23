import { v4 as uuid } from "uuid";

export class BarCodeGenerator {
  private randomCode: string;
  constructor() {
    this.randomCode = uuid().split("-", 0).toString();
  }
  generate(product_barCode: string) {
    return this.randomCode + product_barCode.slice(0, 3);
  }
}
