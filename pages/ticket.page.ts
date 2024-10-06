import { expect, Locator, Page } from '@playwright/test';
export class TicketPage{

readonly page: Page;
readonly addTicket: Locator;
readonly nextBuyerDetails: Locator;
readonly formTicket: Locator;



constructor(page: Page){
this.page = page;

this.formTicket = page.locator('(//span[@data-v-729cd282])[6]');
this.addTicket = page.locator("//*[@id='ticket_type_3003952']/div/div[2]/div[2]/div/div/button[2]/span");
this.nextBuyerDetails = page.locator("//div[@class='px-4 py-6 sm:px-6']//button[@type='button']")


}


async gotoTicket() { 
    await this.page.goto("https://billetto.no/sv/ticket_buyer/offers/8b8ff931-d43b-4ad4-b9b2-7d977964dd54")
}

}