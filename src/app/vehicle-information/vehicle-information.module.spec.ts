import { VehicleInformationModule } from './vehicle-information.module';

describe('VehicleInformationModule', () => {
  let vehicleInformationModule: VehicleInformationModule;

  beforeEach(() => {
    vehicleInformationModule = new VehicleInformationModule();
  });

  it('should create an instance', () => {
    expect(vehicleInformationModule).toBeTruthy();
  });
});
