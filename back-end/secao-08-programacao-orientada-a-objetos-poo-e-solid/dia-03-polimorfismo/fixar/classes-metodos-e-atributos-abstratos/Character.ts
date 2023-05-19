abstract class Character {
  constructor(private _name: string, private _specialMoveName: string) {}

  public get name(): string {
    return this._name;
  }

  public get specialMoveName(): string {
    return this._specialMoveName;
  }

  abstract talk(): void
  abstract specialMove(): void

  static characterPresentation(character: Character): void {
    character.talk();
    character.specialMove();
  }
}

class MeleeCharacter extends Character {
  talk() {
    console.log(`Olá amigo: ${this.name}`);
  }

  specialMove(): void {
    console.log(`Melee attack: ${this.specialMoveName}`);
  }
}

class LongRangeCharacter extends Character {
  talk() {
    console.log(`Olá amigo: ${this.name}`);
  }

  specialMove(): void {
    console.log(`LongRange attack: ${this.specialMoveName}`);
  }
}

const yoshi = new MeleeCharacter('Yoshi', 'SUPER SMASH');
const samus = new LongRangeCharacter('Samus', 'ARROW STORM');

// yoshi.talk();
// yoshi.specialMove();
// samus.talk();
// samus.specialMove();

Character.characterPresentation(yoshi);
Character.characterPresentation(samus);