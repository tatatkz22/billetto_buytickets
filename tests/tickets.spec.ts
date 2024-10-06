import * as fs from 'fs';
import{test,expect} from '@playwright/test';

test('Buying Billetto Tickets',async ({page}) => {
    test.slow();
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    await page.goto("https://billetto.no/sv/ticket_buyer/offers/8b8ff931-d43b-4ad4-b9b2-7d977964dd54");

    // Number of tickets
    console.log('First page => Tickets')
    await expect(page.locator('(//span[@data-v-729cd282])[6]')).toBeVisible;// assert if we are on the ticket
    await page.locator("//*[@id='ticket_type_3003952']/div/div[2]/div[2]/div/div/button[2]/span").click();    // add one ticket
    await delay(5000);
    await page.locator("//div[@class='px-4 py-6 sm:px-6']//button[@type='button']").click()  //click Next => Buyer Details

    console.log('Next page => Buyer Details')

   // Capture Buyer Details
    await expect(page.locator("//div[@id='navbar']//li[1]")).toBeVisible;// assert if we are on Buyer Details
    await delay(10000);
    await page.locator('//*[@id="buyer_name"]').fill('Tata Karabo');
    await page.locator('//*[@id="email"]').fill('tom@healthtower.store');
    await page.locator('//*[@id="email_confirmation"]').fill('tom@healthtower.store');
    await page.locator('//*[@id="phone_number_region_code"]').selectOption('AF');
    await page.locator('//*[@id="phone_number"]').fill('736353637');

    await page.locator('//*[@id="headlessui-radiogroup-option-4"]/span/span').click(); //select address type
    await page.locator('//*[@id="address_first_name"]').fill('Johns');
    await page.locator('//*[@id="address_last_name"]').fill('Nelson');
    await page.locator('//*[@id="address_address_line_1"]').fill('17 Edison Street');
    await page.locator('//*[@id="address_address_line_2"]').fill('Morningside');
    await page.locator('//*[@id="address_zip_code"]').fill('2191');
    await page.locator('//*[@id="address_city"]').fill('Johannesburg');
    await page.locator('//*[@id="address_country_code"]').selectOption('Malaysia');
  
    await page.locator('//*[@id="newsletter"]').check();
    await page.locator('//*[@id="organizer_newsletter_permission"]').click();


    await page.locator('//*[@id="react-root"]/div[1]/div[2]/form/div[2]/div[2]/button').click(); //click Next => Services
    console.log('Next page => Services')
  
    // Services
    await delay(5000);
    await page.locator('//*[@id="services_0_selected_false"]').click();
    await page.locator('//*[@id="services_1_selected_false"]').click();
    await page.locator('//*[@id="services_2_selected_true"]').click();

    
    await page.locator('//*[@id="react-root"]/div[1]/div[2]/form/div[2]/div[2]/button').click();//click Next => Payment
    console.log('Next page => Payment')


    // Payments
    await expect(page.locator('//*[@id="navbar-menu"]/nav/ol/li[4]/span/span[2]/font/font')).toBeVisible;
    await page.locator('//*[@id="payment"]/div[2]/div[2]/button').click();
    await delay(1000);


    const folderPath = './screenshots';
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);}
      const screenshotPath = `${folderPath

      }/paymentscreen.png`;
    await page.screenshot({ path: screenshotPath, fullPage: true });
 
   await page.close();

    });