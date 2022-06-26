const puppeteer = require("puppeteer");
const fs = require("fs/promises");

(async () => {
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

  // getting the images
  const photos = await page.$$eval("img", (imgs) => {
    return imgs.map((x) => x.src);
  });
  
  // looping and visiting the url for the images
  for (const photo of photos) {
    const imagePage = await page.goto(photo);
    await fs.writeFile(photo.split("/").pop(), await imagePage.buffer());
  }
  await browser.close();
})();
