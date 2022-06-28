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

  await browser.close();
}

example();
