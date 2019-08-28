export class Customer {
  quoteId: string;
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  stAddr: string;
  apt: string;
  zipCode: string;

  constructor() {
    this.quoteId = '';
    this.id = '';
    this.firstName = '';
    this.lastName = '';
    this.dob = '';
    this.stAddr = '';
    this.apt = '';
    this.zipCode = '';
  }
}