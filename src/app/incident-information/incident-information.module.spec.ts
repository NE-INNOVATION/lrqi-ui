import { IncidentInformationModule } from './incident-information.module';

describe('IncidentInformationModule', () => {
  let incidentInformationModule: IncidentInformationModule;

  beforeEach(() => {
    incidentInformationModule = new IncidentInformationModule();
  });

  it('should create an instance', () => {
    expect(incidentInformationModule).toBeTruthy();
  });
});
