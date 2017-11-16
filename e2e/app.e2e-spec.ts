import { ClinicaEmagrecimento3Page } from './app.po';

describe('clinica-emagrecimento3 App', () => {
  let page: ClinicaEmagrecimento3Page;

  beforeEach(() => {
    page = new ClinicaEmagrecimento3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
