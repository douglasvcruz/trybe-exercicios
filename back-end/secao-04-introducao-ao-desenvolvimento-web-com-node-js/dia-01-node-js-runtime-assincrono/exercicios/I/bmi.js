const readline = require('readline-sync');

const BMICalculator = (weight, height) => {
  console.log(`Weight: ${weight}, Height: ${height}`)

  const heightMeters = height / 100;
  const heightSquared = heightMeters ** 2;

  const bmi = weight / heightSquared;

  return bmi;
}

const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100,
  },
};

const BMIResult = (bmi) => {
  const result = Object.keys(BMI_MAX_AND_MIN);

  const resultFind = result.find((a) => {
    const { minBMI, maxBMI } = BMI_MAX_AND_MIN[a];
    return bmi >= minBMI && bmi <= maxBMI
  })
  return resultFind;
}

const main = () => {
  const weight = readline.questionFloat('What’s your weight? ');
  const height = readline.questionInt('What’s your height? ');

  const bmi = BMICalculator(weight, height);
  const bmiResult = BMIResult(bmi);
  console.log(`BMI: ${bmi.toFixed(2)}`)
  console.log(`Situation: ${bmiResult}`);
}

main()