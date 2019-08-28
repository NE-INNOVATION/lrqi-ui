import { CustomerInformationModule } from './customer-information.module';

describe('CustomerInformationModule', () => {
  let customerInformationModule: CustomerInformationModule;

  beforeEach(() => {
    customerInformationModule = new CustomerInformationModule();
  });

  it('should create an instance', () => {
    expect(customerInformationModule).toBeTruthy();
  });
});
