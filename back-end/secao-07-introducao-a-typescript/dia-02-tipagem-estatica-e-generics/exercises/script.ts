class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  turnOn(): void {
    console.log('Carro ligado.')
  }

  turnOff(): void {
    console.log('Carro desligado.')
  }

  turn(direction: string): void {
    console.log(`Virando para a ${direction}.`);
  }

  speedUp(): void {
    console.log("Acelerando o carro.");
  }

  speedDown(): void {
    console.log("Reduzindo a velocidade do carro.");
  }

  stop(): void {
    console.log("Parando o carro.");
  }

  honk(): void {
    console.log("Buzinando: BIP BIP");
  }
}

type Slices = 4 | 6 | 8;
type Common = 'Calabresa' | 'Frango' | 'Pepperoni';
type Vegetarian = 'Marguerita' | 'Palmito' | 'Cogumelos';
type Sugar = 'Nutella' | 'Goiabada com Queijo' | 'Marshmallow';

interface Pizza {
  flavor: string,
  slices: Slices
}

export {
  Car, Pizza, Common, Vegetarian, Sugar
};