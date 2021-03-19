export class Incident {
  category: string;
  driver: string;
  responsible: string;
  when: string;
  quoteId: string;

  constructor() {
    this.quoteId = "";
    this.category = "";
    this.driver = "";
    this.responsible = "";
    this.when = "";
  }
}
