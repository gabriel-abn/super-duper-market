import { Selling } from "../../domain/Selling";
import { EmployeeRepository } from "../repositories/EmployeeRepository";
import { ProductRepository } from "../repositories/ProductRepository";
import { SellingRepository } from "../repositories/SellingRepository";

type CreateSellingRequestDTO = {
  id: string;
  product_codeBar: string;
  employeeCPF: string;
};

export class CreateSellingUseCase {
  constructor(
    private sellingRepo: SellingRepository,
    private productRepo: ProductRepository,
    private employeeRepo: EmployeeRepository,
  ) {}

  async execute(product_barCode: string, employeeCPF: string) {
    const product = await this.productRepo.findByBarCode(product_barCode);
    if (!product) {
      throw new Error("Product not found");
    }

    const employee = await this.employeeRepo.searchByCPF(employeeCPF);
    if (!employee) {
      throw new Error("Employee not found!");
    }

    const newSelling = Selling.create({
      id: "'1234567",
      product_id: product.props.bar_code,
      seller_cpf: employee.props.cpf,
      selling_date: Date.now().toString(),
      total_price: 10,
    });
    this.sellingRepo.insert(newSelling);

    return newSelling;
  }
}
