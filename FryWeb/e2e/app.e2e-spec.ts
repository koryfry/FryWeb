import { FryWebPage } from './app.po';

describe('fry-web App', () => {
  let page: FryWebPage;

  beforeEach(() => {
    page = new FryWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
