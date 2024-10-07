**Installations**
1. Install VS Code 
2. Install NodeJs 
3. Install Playwright + Typescript 
4. Install Allure Reports

**Automation Architecture**
1. Data Driven Testing reading from JSON files(NO IMPLEMENTATION)
   Sample files created in testData folder

2. Project Object Model (IMPLEMENTED)
  POM files contained in pages folder

3. Screenshots
  Sample screenshot taken automatically when on the last step of submitting chosen Payment Method.
  Screenshots are saved in Screenshots folder

4. Allure Reports
  Report integration done using Allure reports
  a. Install Allure dependencies using command npm install --save-dev @playwright/test allure-playwright allure-commandline
  
  b. Config  playwright.config.ts
     reporter: [
    	['list'],                       // Optional: Display test results in console
    		['allure-playwright'],          // Allure report generation
  	],
     use: {
    		trace: 'on-first-retry',        // Capture traces for failed tests
    		screenshot: 'only-on-failure',  // Capture screenshots on failure
  	},

 c. Add Allure report hooks as shown below

   	await test.step('Verify Method of Payment Selected', async () => {
      
    	});

 d. Generate reports by running the below commands in the terminal:
  	npx allure generate allure-results --clean
	npx allure open

**Execution**
1. Run All tests under 'Buying Billetto Tickets'
