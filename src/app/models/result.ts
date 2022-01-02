export class Result {
    personID: string;
    personName: string;
    allExpense: number;
    commonExpense: number;
    separateExpense: number;
    summary: number;

    constructor(personID: string, personName: string, allExpense: number, commonExpense: number, separateExpense: number, summary: number) {
        {
            this.personID = personID;
            this.personName = personName;
            this.allExpense = allExpense;
            this.commonExpense = commonExpense;
            this.separateExpense = separateExpense;
            this.summary = summary;
        }
    }
}