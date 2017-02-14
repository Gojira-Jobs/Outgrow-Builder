import {OutgrowBuilderPage} from "./app.po";

describe('outgrow-builder App', function() {
  let page: OutgrowBuilderPage;

  beforeEach(() => {
    page = new OutgrowBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
