export abstract class Pizzeria {
  static id = 0; // Do pola statycznego odnosimy sie poprzez nazwę klasy, np. Pizzeria.id
  id: any;
  readonly name: string;
  private pizzasInOrder: any[] = [];
  private maxPizzasInOver: number = 10;
  protected recipes: any[] = [];
  private _manager: string = "Jan Kowalski";

  constructor(name: string) {
    this.id = Pizzeria.id++;
    this.name = name;
  }

  get manager() {
    return this._manager;
  }

  set manager(manager) {
    this._manager = manager;
  }

  order(pizza: string) {
    this.pizzasInOrder.push(pizza);
  }

  private isOvenFull() {
    return this.pizzasInOrder.length > this.maxPizzasInOver;
  }

  abstract bake(): any;

}
