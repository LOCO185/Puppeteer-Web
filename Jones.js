const puppeteer = require("puppeteer");

async function example() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://contractorsinsurancereview.com/ExampleForm/");

  // Name
  // example 1
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

  await browser.close();
}

example();
