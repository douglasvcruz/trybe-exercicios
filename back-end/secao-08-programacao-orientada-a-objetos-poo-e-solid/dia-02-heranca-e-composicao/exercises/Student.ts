import Person from "./Person";

export default class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];
  
  constructor(
    name: string,
    birthDate: Date,
  ) {
    super(name, birthDate)
    this.enrollment = this.generateEnrollment();
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public set enrollment(value: string) {
    if (value.length < 16) throw new Error('length must be at least 16 characters')
    this._enrollment = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }
  
  public set examsGrades(value: number[]) {
    if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    this._examsGrades = value;
  }

  public get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  public set assignmentsGrades(value: number[]) {
    if (value.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
    this._assignmentsGrades = value;
  }

  sumGrades(): number {
    return this._examsGrades.reduce((a, b) => a + b);
  }

  sumAverageGrade(): number {
    return this.sumGrades() / this._examsGrades.length;
  }

  generateEnrollment() {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`;
  }
}