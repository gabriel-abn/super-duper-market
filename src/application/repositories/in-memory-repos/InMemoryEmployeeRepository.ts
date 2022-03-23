import { Employee } from "../../../domain/Employee";
import { EmployeeRepository } from "../EmployeeRepository";

export class InMemoryEmplyeeRepository implements EmployeeRepository {
  protected employees: Employee[] = [];

  async insert(employee: Employee): Promise<Employee> {
    this.employees.push(employee);

    return this.employees.find((epl) => {
      if (epl.props.cpf == employee.props.cpf) {
        return epl;
      }
    });
  }
  async searchByCPF(cpf: string): Promise<Employee> {
    return this.employees.find((employee) => {
      if (employee.props.cpf == cpf) {
        return employee;
      }
    });
  }
}
