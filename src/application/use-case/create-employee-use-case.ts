import { EmployeeRepository } from "../repositories/EmployeeRepository";
import { Employee } from "../../domain/Employee";

type CreateEmployeeRequestDTO = {
  id: string;
  name: string;
  cpf: string;
  position: string;
};

export class CreateEmployeeUseCase {
  constructor(private readonly employeeRepo: EmployeeRepository) {}

  async execute(employeeDTO: CreateEmployeeRequestDTO) {
    const createEmployee = Employee.create({
      cpf: employeeDTO.cpf,
      efficiencyMeter: 0,
      id: employeeDTO.id,
      name: employeeDTO.name,
      position: employeeDTO.position,
      salary: 0,
    });

    const insert = await this.employeeRepo
      .insert(createEmployee)
      .then((employee) => {
        return employee;
      })
      .catch((err) => {
        throw new Error(err);
      });

    return insert;
  }
}
