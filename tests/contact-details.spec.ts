import { test, expect } from '../Pages/fixture';      
import { contactTestData } from '../Pages/testdata';    
import playwright from '@playwright/test';


test.beforeEach(async ({ loginPage, basePage ,page}) => {
  await basePage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await loginPage.login('TiaIslam', 'Tia@2026');
  await playwright.expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});

test('TC 001: Verify successful update of contact details (Smoke)', async ({ contactDetailsPage }) => {
  await contactDetailsPage.clickMyInfoTab();
  await contactDetailsPage.clickContactDetailsTab();
  await contactDetailsPage.fillContactDetails(contactTestData.validDetails);
  await contactDetailsPage.clickSave();
  await contactDetailsPage.verifySuccessToast();
});

test('Verify clearing non-required fields and saving @smoke', async ({ contactDetailsPage }) => {
  await contactDetailsPage.clearContactDetails();
  await contactDetailsPage.clickSave();
  await contactDetailsPage.verifySuccessToast();
});

test('Verify invalid data/format in Telephone fields @regression', async ({ contactDetailsPage }) => {
  await contactDetailsPage.fillinvalidhome(contactTestData.invalidData.homePhone);

  await contactDetailsPage.clickSave();
  await contactDetailsPage.verifyErrorToast();
});

