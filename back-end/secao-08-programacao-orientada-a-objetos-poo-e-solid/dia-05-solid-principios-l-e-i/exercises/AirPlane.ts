import { IAirPlane } from "./interfaces";

export default class AirPlane implements IAirPlane {
  fly(): void {
    console.log("Flying airplane");
  }

  drive(): void {
    throw new Error('I don\'t drive');
  }
}