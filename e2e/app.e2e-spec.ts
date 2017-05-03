import { TestmaterialPage } from './app.po';

describe('testmaterial App', () => {
  let page: TestmaterialPage;

  beforeEach(() => {
    page = new TestmaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
