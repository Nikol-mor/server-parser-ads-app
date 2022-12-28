const puppeteer = require('puppeteer');

module.exports = {
  scrapeAdsTxt,
  parseAdsTxt,
};

async function scrapeAdsTxt(domain) {
  console.log('domain', domain);
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://' + domain + '/ads.txt');
    const txt = await page.evaluate(() => document.querySelector('pre').innerText);
    await browser.close();
    return txt;
  } catch (err) {
    console.log('err');
  }
}

async function parseAdsTxt(txt) {
  const adsTxt = {};

  const txtLines = txt.split('\n');
  txtLines.forEach((line) => {
    const lineDetails = line.split(',');
    const advertiserDomain = lineDetails[0].toLowerCase();
    if (lineDetails.length > 1)
      adsTxt[advertiserDomain] = adsTxt[advertiserDomain] ? adsTxt[advertiserDomain] + 1 : 1;
  });

  return Object.entries(adsTxt);
}
