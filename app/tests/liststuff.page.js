import { Selector } from 'testcafe';

class ListStuffPage {
  constructor() {
    this.pageId = '#list-stuff-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    const osCount = Selector('tr').count;
    await testController.expect(rowCount).gte(2);
  }
}

export const listStuffPage = new ListStuffPage();
