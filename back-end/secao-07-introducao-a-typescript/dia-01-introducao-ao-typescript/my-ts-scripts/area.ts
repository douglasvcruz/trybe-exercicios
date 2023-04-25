const areaUnits = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function convertArea(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = areaUnits.indexOf(fromUnit); // pegamos o index da unidade base no array
  const toIndex = areaUnits.indexOf(toUnit); // pegamos o index da unidade para a conversão
  const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index

  return value * Math.pow(100, exponent);
}
