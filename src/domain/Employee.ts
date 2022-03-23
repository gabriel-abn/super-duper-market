import { Entity } from "./core/Entity";

type EmployeeProps = {
  id: string;
  name: string;
  cpf: string;
  position: string;
  salary: number;
  efficiencyMeter: number;
};

export class Employee extends Entity<EmployeeProps> {
  private constructor(props: EmployeeProps, id?: string) {
    super(props, id);
  }

  static create(props: EmployeeProps, id?: string) {
    return new Employee({ ...props, id });
  }
}
