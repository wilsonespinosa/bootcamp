import { Angular2Martes6Page } from './app.po';

describe('angular2-martes6 App', function() {
  let page: Angular2Martes6Page;

  beforeEach(() => {
    page = new Angular2Martes6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
