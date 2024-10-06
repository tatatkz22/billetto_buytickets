import { expect, Locator, Page } from '@playwright/test';
export class BuyerDetailsPage{

readonly page: Page;
readonly formBuyerDetails: Locator;
readonly attendeeName: Locator;
readonly buyerEmail: Locator;
readonly buyerEmailConfirmation: Locator;
readonly buyerPhoneRegionCode: Locator;
readonly buyerPhoneNumber: Locator;
readonly buyerAddresType: Locator;
readonly buyerFirstName : Locator;
readonly buyerLastName: Locator;
readonly buyerAddresLine1: Locator;
readonly buyerAddresLine2: Locator;
readonly buyerZipCode: Locator;
readonly buyerAddresCity: Locator;
readonly buyerAddresCountryCode: Locator;
readonly buyerNewsletter: Locator;
readonly buyerOrganizerNewsletter: Locator;
readonly nextServices: Locator;



constructor(page: Page){
this.page = page;


this.formBuyerDetails = page.locator("//div[@id='navbar']//li[1]");
this.attendeeName = page.locator('//*[@id="buyer_name"]');
this.buyerEmail = page.locator('//*[@id="email"]');
this.buyerEmailConfirmation =  page.locator('//*[@id="email_confirmation"]');
this.buyerPhoneRegionCode = page.locator('//*[@id="phone_number_region_code"]');
this.buyerPhoneNumber = page.locator('//*[@id="phone_number"]');
this.buyerAddresType = page.locator('//*[@id="headlessui-radiogroup-option-4"]/span/span');
this.buyerFirstName = page.locator('//*[@id="address_first_name"]');
this.buyerLastName = page.locator('//*[@id="address_last_name"]');
this.buyerAddresLine1 = page.locator('//*[@id="address_address_line_1"]');
this.buyerAddresLine2 = page.locator('//*[@id="address_address_line_2"]');
this.buyerZipCode = page.locator('//*[@id="address_zip_code"]');
this.buyerAddresCity = page.locator('//*[@id="address_city"]');
this.buyerAddresCountryCode = page.locator('//*[@id="address_country_code"]');
this.buyerNewsletter = page.locator('//*[@id="newsletter"]');
this.buyerOrganizerNewsletter = page.locator('//*[@id="organizer_newsletter_permission"]');
this.nextServices = page.locator('//*[@id="react-root"]/div[1]/div[2]/form/div[2]/div[2]/button');
    


}




}