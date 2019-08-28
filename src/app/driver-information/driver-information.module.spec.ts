import { DriverInformationModule } from './driver-information.module';

describe('DriverInformationModule', () => {
  let driverInformationModule: DriverInformationModule;

  beforeEach(() => {
    driverInformationModule = new DriverInformationModule();
  });

  it('should create an instance', () => {
    expect(driverInformationModule).toBeTruthy();
  });
});
