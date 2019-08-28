import { RateIssueModule } from './rate-issue.module';

describe('RateIssueModule', () => {
  let rateIssueModule: RateIssueModule;

  beforeEach(() => {
    rateIssueModule = new RateIssueModule();
  });

  it('should create an instance', () => {
    expect(rateIssueModule).toBeTruthy();
  });
});
