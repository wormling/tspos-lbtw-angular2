import { TsposLbtwAngular2Page } from './app.po';

describe('tspos-lbtw-angular2 App', () => {
  let page: TsposLbtwAngular2Page;

  beforeEach(() => {
    page = new TsposLbtwAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
