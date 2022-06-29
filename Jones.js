const puppeteer = require("puppeteer");

const URL = "http://contractorsinsurancereview.com/ExampleForm/";

async function example() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(URL);


  await browser.close();
}

example();
