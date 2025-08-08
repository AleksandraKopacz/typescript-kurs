import { Orderable } from "./orderable";
import { Pizza, Status, Size } from "./pizza.model";

export abstract class Pizzeria implements Orderable {
  static id: number = 0; // Do pola statycznego odnosimy sie poprzez nazwę klasy, np. Pizzeria.id
  id: number;
  readonly name: string;
  pizzasInOrder: Pizza[] = [];
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

  order(pizza: Pizza) {
    this.pizzasInOrder.push(pizza);
  }
  changeStatus(index: number, status: Status) {
    this.pizzasInOrder[index].status = status;
  }

  isOvenFull() {
    return this.pizzasInOrder.length > this.maxPizzasInOver;
  }

  abstract bake(): void;
}
