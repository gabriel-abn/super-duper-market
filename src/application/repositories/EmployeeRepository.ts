import { Employee } from "../../domain/Employee";

export interface EmployeeRepository {
  insert(employee: Employee): Promise<Employee>;
  searchByCPF(cpf: string): Promise<Employee | null>;
}
