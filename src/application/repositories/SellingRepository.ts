import { Selling } from "../../domain/Selling";

export interface SellingRepository {
  insert(sell: Selling): Promise<Selling>;
  searchByID(id: string): Promise<Selling | null>;
}
