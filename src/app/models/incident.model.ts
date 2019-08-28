export class Incident {
    id: string;
    category: string;
    driver: string;
    responsible: string;
    when: string;
    quoteId: string;
    
    constructor() {
      this.quoteId = '';
      this.id = '';
      this.category = '';
      this.driver = '';
      this.responsible = '';
      this.when = '';
    }
  }