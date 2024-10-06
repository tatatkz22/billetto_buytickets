import { expect, Locator, Page } from '@playwright/test';
export class ServicesPage{

readonly page: Page;
readonly serviceOne: Locator;
readonly serviceTwo: Locator;
readonly serviceThree: Locator;
readonly nextPayment: Locator;



constructor(page: Page){
this.page = page;


this.serviceOne = page.locator('//*[@id="services_0_selected_false"]');
this.serviceTwo =  page.locator('//*[@id="services_1_selected_false"]');
this.serviceThree =  page.locator('//*[@id="services_2_selected_true"]');
this.nextPayment =  page.locator('//*[@id="react-root"]/div[1]/div[2]/form/div[2]/div[2]/button');


}


}