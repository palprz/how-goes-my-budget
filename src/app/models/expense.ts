import { Person } from "./person";

export class Expense {
    name: string;
    cost: number;
    forWhom: Person[] = [];

    constructor(name: string, cost: number) {
        {
            this.name = name;
            this.cost = cost;
        }
    }

    addPersonToExpense(person: Person) {
        this.forWhom.push(person);
    }

    removePersonFromExpense() {
        // TODO
    }
}