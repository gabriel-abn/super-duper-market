import { Selling } from "../../../domain/Selling";
import { SellingRepository } from "../SellingRepository";

export class InMemorySellingRepository implements SellingRepository {
  private sells: Selling[] = [];

  async insert(sell: Selling): Promise<Selling> {
    this.sells.push(sell);

    return sell;
  }

  searchByID(id: string): Promise<Selling> {
    const sell = this.sells.find((find) => {
      if (find.props.id == id) {
        return find;
      }
    });
    throw new Error("Method not implemented.");
  }
}
