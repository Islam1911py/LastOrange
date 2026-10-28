import { test as base } from '@playwright/test';
import { LoginPage } from './loginpage';
import { BasePage } from './basepage';
import { ContactDetailsPage } from './ContactDetailsPage';

type Page = {
  loginPage: LoginPage;
  basePage: BasePage;
  contactDetailsPage: ContactDetailsPage;
};
const testPages = base.extend<Page>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  contactDetailsPage: async ({ page }, use) => {
    await use(new ContactDetailsPage(page));
  },
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
});

export const test = testPages;
export const expect = base.expect