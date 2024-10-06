import { expect, Locator, Page } from '@playwright/test';
export class PaymentPage{

readonly page: Page;
readonly formPayment : Locator;
readonly submitPaymentMethod: Locator;




constructor(page: Page){
this.page = page;

this.formPayment = page.locator('//*[@id="navbar-menu"]/nav/ol/li[4]/span/span[2]/font/font');
this.submitPaymentMethod =  page.locator('//*[@id="payment"]/div[2]/div[2]/button');


}


}