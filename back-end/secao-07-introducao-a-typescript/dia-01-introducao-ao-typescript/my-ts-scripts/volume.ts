const volumeUnits = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function convertVolume(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = volumeUnits.indexOf(fromUnit); // pegamos o index da unidade base no array
  const toIndex = volumeUnits.indexOf(toUnit); // pegamos o index da unidade para a conversão
  const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index

  return value * Math.pow(1000, exponent);
}
