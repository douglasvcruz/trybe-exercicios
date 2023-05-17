export default class Subject {
  constructor(private _name: string) {}

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    if (value.length < 3) throw new Error('length must be at least 3 characters');
    this._name = value;
  }
}