import { Locator, Page } from '@playwright/test';


export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(path: string) {
    await this.page.goto(path);
  }



  async enterText(element: Locator, text: string) {
    await element.fill(text);
  }
  async clickElement(element: Locator) {
    await element.click();
  }
  async clreartext(element: Locator) {
    await element.clear();
  }
}