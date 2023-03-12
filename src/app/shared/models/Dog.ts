export class Dog {
  id: number
  name: string;
  heightInCm: number;
  isAlive: boolean;

  constructor(id:number, name: string, heightInCm: number, isAlive: boolean) {
    this.id = id;
    this.name = name;
    this.heightInCm = heightInCm;
    this.isAlive = isAlive;
  }
}
