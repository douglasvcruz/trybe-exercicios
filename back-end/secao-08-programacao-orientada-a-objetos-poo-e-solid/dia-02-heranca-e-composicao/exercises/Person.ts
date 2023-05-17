export default class Person {
  constructor(
    private _name: string,
    private _birthDate: Date,
  ) {}

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    if (value.length < 3) {
      throw new Error('Name must be at least 3 characters long');
    }
    this._name = value;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs);
  }
  
  public set birthDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro');
    }

    if (Person.getAge(value) > 120) {
      throw new Error('A data de nascimento não pode ser maior que 120 anos');
    }
    this._birthDate = value;
  }
}