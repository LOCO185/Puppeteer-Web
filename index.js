const puppeteer = require("puppeteer");
const fs = require("fs/promises");

async function start() {
  // launching chrome browser
  const browser = await puppeteer.launch();
  // open new tab
  const page = await browser.newPage();
  // visiting the specific url
  await page.goto("https://learnwebcode.github.io/practice-requests/");
  // taking screen shot
  await page.screenshot({ path: "amazing.png" });
  // getting the specific element and creating an array to store them in
  const names = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".info strong")).map(
      (x) => x.textContent
    );
  });
  // creating file and writing the names inside of it
  await fs.writeFile("names.txt", names.join("\r\n"));

  // getting the data on button clicked
  await page.click("#clickme");
  const clickedData = await page.$eval("#data", (el) => el.textContent);
  console.log(clickedData);

  // getting the images
  const photos = await page.$$eval("img", (imgs) => {
    return imgs.map((x) => x.src);
  });

  // getting specific submit field, and getting the data within new page url
  await page.type("#ourfield", "blue");
  await Promise.all([page.click("#ourform button"), page.waitForNavigation()]);
  const info = await page.$eval("#message", (el) => el.textContent);
  console.log(info);

  // looping and visiting the url for the images
  for (const photo of photos) {
    const imagePage = await page.goto(photo);
    await fs.writeFile(photo.split("/").pop(), await imagePage.buffer());
  }
  await browser.close();
}

start();
