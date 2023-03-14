const doMath = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      typeof c !== "number"
    ) {
      return reject(new Error("Informe apenas números"));
    }

    const result = (a + b) * c;

    if (result < 50) {
      return reject(new Error("Valor muito baixo"));
    }
    resolve(result);
  });
};

const firstResolve = async () => {
  try {
    const resolve = await doMath(10, 10, 10);
    console.log(resolve);
  } catch (error) {
    console.log(error.message);
  }
}

firstResolve();

const secondResolve = async () => {
  try {
    const resolve = await doMath(1, 1, "a");
    console.log(resolve);
  } catch (error) {
    console.log(error.message);
  }
}

secondResolve();

const thirdResolve = async () => {
  try {
    const resolve = await doMath(1, 1, 1);
    console.log(resolve);
  } catch (error) {
    console.log(error.message);
  }
}

thirdResolve();
