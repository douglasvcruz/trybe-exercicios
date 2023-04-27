// type
type Bird = {
  wings: 2;
  beaks: 1;
  biped: true;
}

type Sum = (x: number, y: number) => number;

type Address = {
  publicPlace: string;
  number: number;
  district: string;
  city: string;
  state: string;
}

// type unions
type StatesOfMatter = 'liquid' | 'solid' | 'gaseous';

type IdentifyingDocument = string | number;

type System = 'linux' | 'mac' | 'windows';

type Vowels = 'a' | 'e' | 'i' | 'o' | 'u';
