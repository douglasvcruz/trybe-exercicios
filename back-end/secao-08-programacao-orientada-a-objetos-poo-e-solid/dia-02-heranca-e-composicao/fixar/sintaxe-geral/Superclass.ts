class Superclass {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  protected sayHello() {
    console.log("Olá mundo!");
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }

  public sayHello2() {
    this.sayHello()
  }
}

const myFunc = (obj: Subclass) => {
  obj.sayHello2();
  console.log(obj.isSuper ? "Super!" : "Sub!");
}

// const objSuperclass = new Superclass();
const objSubclass = new Subclass();

// myFunc(objSuperclass);
myFunc(objSubclass);