import { BucketsPage } from './app.po';

describe('buckets App', function() {
  let page: BucketsPage;

  beforeEach(() => {
    page = new BucketsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
