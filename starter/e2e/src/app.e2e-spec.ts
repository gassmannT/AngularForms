import { AppPage } from './app.po';

describe('employee-portal App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo('/');
    expect(page.getText('app-root h2')).toEqual('Emyployee Portal');
  });
});
