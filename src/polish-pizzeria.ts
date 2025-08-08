import { Pizzeria } from "./pizzeria";

export class PolishPizzeria extends Pizzeria {
    constructor(name:string, public openAtNight:boolean) {
        super(name); // super musi być zawsze pierwszy w konstruktorze
    }

    bake() {
        return "Pizza is being baked"
    }
};