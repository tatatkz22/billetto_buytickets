import * as fs from 'fs';
import{test,expect} from '@playwright/test';
import { TicketPage } from '../pages/ticket.page';
import { BuyerDetailsPage } from '../pages/buyerdetails.page';
import { ServicesPage } from '../pages/services.page';
import { PaymentPage } from '../pages/payment.page';



test('Buying Billetto Tickets',async ({page}) => {
    test.slow();
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

      
    const  NewTicket = new TicketPage(page);
    const BuyerDetails = new BuyerDetailsPage(page);
    const Ticket_Services = new ServicesPage(page);
    const selectPayment = new PaymentPage(page)

   
    await NewTicket.gotoTicket();


    

    // Number of tickets
    console.log('First page => Tickets')
    await test.step('Verify addition of tickets', async () => { 
    });
    await expect(NewTicket.formTicket).toBeVisible; // assert if we are on the ticket
    await NewTicket.addTicket.click();    // add one ticket
    await delay(5000);
    await NewTicket.nextBuyerDetails.click()  //click Next => Buyer Details
    console.log('Next page => Buyer Details')

   // Capture Buyer Details
    await delay(10000);
    await test.step('Verify capturing and submission of Buyer  Details', async () => { 
    });
    await expect(BuyerDetails.formBuyerDetails).toBeVisible;// assert if we are on Buyer Details
    await BuyerDetails.attendeeName.fill('Tata Karabo');
    await BuyerDetails.buyerEmail.fill('tom@healthtower.store');
    await BuyerDetails.buyerEmailConfirmation.fill('tom@healthtower.store');
    await BuyerDetails.buyerAddresCountryCode.selectOption('AF');
    await BuyerDetails.buyerPhoneNumber.fill('73635363');
    await BuyerDetails.buyerAddresType.click(); //select address type
    await BuyerDetails.buyerFirstName.fill('Johns');
    await BuyerDetails.buyerLastName.fill('Nelson');
    await BuyerDetails.buyerAddresLine1.fill('17 Edison Street');
    await BuyerDetails.buyerAddresLine2.fill('Morningside');
    await BuyerDetails.buyerZipCode.fill('2191');
    await BuyerDetails.buyerAddresCity.fill('Johannesburg');
    await BuyerDetails.buyerAddresCountryCode.selectOption('Malaysia');
    await BuyerDetails.buyerNewsletter.check();
    await BuyerDetails.buyerOrganizerNewsletter.click();
    await BuyerDetails.nextServices.click(); //click Next => Services
    console.log('Next page => Services')
  
    // Services
    await delay(5000);
    await test.step('Verify selection of Services', async () => { 
    });
    await Ticket_Services.serviceOne.click();
    await Ticket_Services.serviceTwo.click();
    await Ticket_Services.serviceThree.click();
    await Ticket_Services.nextPayment.click();//click Next => Payment
  
    console.log('Next page => Payment')


    // Payments
    await expect(selectPayment.formPayment).toBeVisible;
    await selectPayment.submitPaymentMethod.click();
 
    await delay(1000);


    // Create the screenshots folder if it doesn't exist
    await test.step('Verify submission of payment method', async () => { 
    });

    const folderPath = './screenshots';
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
      const screenshotPath = `${folderPath}/paymentscreen.png`;

    await page.screenshot({ path: screenshotPath, fullPage: true });
 
   

    });


    
test('Submitting Payment',async ({page}) => {
  
    await test.step('Verify Method of Payment Selected', async () => {
      
    });
  
    await test.step('Verify URL for payment', async () => {
      
    });
  });

