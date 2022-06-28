const puppeteer = require("puppeteer");

const URL = "http://contractorsinsurancereview.com/ExampleForm/";

async function example() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(URL);

  // Name
  await page.$eval("#name", (el) => (el.value = "Jawad Asaad"));

  // Email
  await page.$eval("#email", (el) => (el.value = "test@example.com"));

  // Phone
  await page.$eval("#phone", (el) => (el.value = "0526572337"));

  // Company fields
  await page.$eval("#company", (el) => (el.value = "Jones"));

  // Number of Employees
  await page.select("#employees", "51-500");

  //  Create a screenshot of the page before clicking the “Request a call back” button.
  await page.screenshot({ path: "Page1.png" });

  // Click the “Request a call back” button
  await page.click(".primary");

  // Screenshot Thank You page
  await page.screenshot({ path: "thankYouPage.png" });

  // console.log when reaching the thank you page
  const clickedData = await page.$eval(".text-center", (el) => el.textContent);
  console.log(clickedData);

  await browser.close();
}

example();
