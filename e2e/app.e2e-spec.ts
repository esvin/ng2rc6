import { Ng2rc6Page } from './app.po';

describe('ng2rc6 App', function() {
  let page: Ng2rc6Page;

  beforeEach(() => {
    page = new Ng2rc6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
