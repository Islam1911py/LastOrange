import { Page, Locator } from '@playwright/test';
import { BasePage } from './basepage';
import { expect } from '@playwright/test';
export class ContactDetailsPage extends BasePage {

  private readonly street1: Locator;
  private readonly street2: Locator;
  private readonly city: Locator;
  private readonly stateProvince: Locator;
  private readonly zipPostalCode: Locator;
  private readonly country: Locator;
  private readonly homePhone: Locator;
  private readonly mobile: Locator;
  private readonly workPhone: Locator;
  private readonly workEmail: Locator;
  private readonly otherEmail: Locator;
  private readonly saveButton: Locator;
  private readonly attachmentsAddButton: Locator;
  private readonly successToast: Locator;
  private readonly myInfoTab : Locator;
  private readonly contactDetailsTab : Locator;
  


  constructor (page: Page) {
    super(page); 

    this.street1 = this.page.locator('input.oxd-input').nth(0);
    this.street2 = this.page.locator('input.oxd-input').nth(1);
    this.city = this.page.locator('input.oxd-input').nth(2);
    this.stateProvince = this.page.locator('input.oxd-input').nth(3);
    this.zipPostalCode = this.page.locator('input.oxd-input').nth(4);
    this.country = this.page.locator('div.oxd-select-text').nth(0);
    this.homePhone = this.page.locator('input.oxd-input').nth(5);
    this.mobile = this.page.locator('input.oxd-input').nth(6);
    this.workPhone = this.page.locator('input.oxd-input').nth(7);
    this.workEmail = this.page.locator('input.oxd-input').nth(8);
    this.otherEmail = this.page.locator('input.oxd-input').nth(9);
    this.saveButton = this.page.getByRole('button', { name: 'Save' });
    this.attachmentsAddButton = this.page.getByRole('button', { name: 'Add' });
    this.successToast = this.page.locator('div.oxd-toast-content');
    this.myInfoTab = this.page.getByRole('link', { name: 'My Info' });
    this.contactDetailsTab = this.page.getByRole('link', { name: 'Contact Details' });
  }

  async fillContactDetails(contactDetails: any) {
    await this.enterText(this.street1, contactDetails.street1);
    await this.enterText(this.street2, contactDetails.street2);
    await this.enterText(this.city, contactDetails.city);
    await this.enterText(this.stateProvince, contactDetails.stateProvince);
    await this.enterText(this.zipPostalCode, contactDetails.zipPostalCode);
    await this.enterText(this.homePhone, contactDetails.homePhone);
    await this.enterText(this.mobile, contactDetails.mobile);
    await this.enterText(this.workPhone, contactDetails.workPhone);
    await this.enterText(this.workEmail, contactDetails.workEmail);
    await this.enterText(this.otherEmail, contactDetails.otherEmail);
  }

  async clearContactDetails() {
    await this.clreartext(this.street1);
    await this.clreartext(this.street2);
    await this.clreartext(this.city);
    await this.clreartext(this.stateProvince);
    await this.clreartext(this.zipPostalCode);
    await this.clreartext(this.homePhone);
    await this.clreartext(this.mobile);
    await this.clreartext(this.workPhone);
    await this.clreartext(this.workEmail);
    await this.clreartext(this.otherEmail);
  }

  async fillinvalidhome(homePhone: string) {
    await this.enterText(this.homePhone, homePhone);
  }

  async clickSave() {
    await this.clickElement(this.saveButton);
  }
  async clickMyInfoTab() {
    await this.clickElement(this.myInfoTab);
  }
  async clickContactDetailsTab() {
    await this.clickElement(this.contactDetailsTab);
  }


  /// assertions
  async verifyContactDetails(contactDetails: any) {
    await expect(this.street1).toHaveValue(contactDetails.street1);
    await expect(this.street2).toHaveValue(contactDetails.street2);
    await expect(this.city).toHaveValue(contactDetails.city);
    await expect(this.stateProvince).toHaveValue(contactDetails.stateProvince);
    await expect(this.zipPostalCode).toHaveValue(contactDetails.zipPostalCode);
    await expect(this.homePhone).toHaveValue(contactDetails.homePhone);
    await expect(this.mobile).toHaveValue(contactDetails.mobile);
    await expect(this.workPhone).toHaveValue(contactDetails.workPhone);
    await expect(this.workEmail).toHaveValue(contactDetails.workEmail);
    await expect(this.otherEmail).toHaveValue(contactDetails.otherEmail);
  }

  async verifySuccessToast() {
    await expect(this.successToast).toBeVisible();
    await expect(this.successToast).toHaveText('Successfully Updated');
  }
  async verifyErrorToast() {
    await expect(this.successToast).toBeVisible();
    await expect(this.successToast).toHaveText('Failed to Update');
  }



}