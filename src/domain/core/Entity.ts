export abstract class Entity<T> {
  protected id: string;
  public props: T;

  constructor(props: T, id?: string) {
    this.id = id;
    this.props = props;
  }

  public get _id() {
    return this.id;
  }
}
