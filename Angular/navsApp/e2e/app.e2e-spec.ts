import { NavsAppPage } from './app.po';

describe('navs-app App', function() {
  let page: NavsAppPage;

  beforeEach(() => {
    page = new NavsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
