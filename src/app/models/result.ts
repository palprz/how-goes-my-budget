export class Result {
  personID: string;
  personName: string;
  totalExpense: number;
  commonExpense: number;
  individualExpense: number;
  summary: number;
  expenseMap: Map<string, number>;

  constructor(
    personID: string,
    personName: string,
    totalExpense: number,
    commonExpense: number,
    individualExpense: number,
    summary: number,
    expenseMap: Map<string, number>
  ) {
    {
      this.personID = personID;
      this.personName = personName;
      this.totalExpense = totalExpense;
      this.commonExpense = commonExpense;
      this.individualExpense = individualExpense;
      this.summary = summary;
      this.expenseMap = expenseMap;
    }
  }
}
