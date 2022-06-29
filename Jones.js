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


  await browser.close();
}

example();
