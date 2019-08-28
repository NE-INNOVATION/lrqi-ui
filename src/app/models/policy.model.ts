export class Policy {
  id: string;
  confirmEmail: string;
  confirmContactNum: string;
  bankName: string;
  accountNum: string
  quoteId: string;
  policyNumber: string;

  constructor() {
    this.id = '';
    this.confirmEmail = '';
    this.confirmContactNum = '';
    this.bankName = '';
    this.accountNum = '';
    this.quoteId = '';
    this.policyNumber = '';
  }
}