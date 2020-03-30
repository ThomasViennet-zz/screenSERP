const puppeteer = require('puppeteer');

(async () => {
  console.log('Initialisation');
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();

  var keywords = ['mot', 'mot+clé'];

  console.log('Mots clés :' + keywords);
  for (var i = 0; i < keywords.length; i++) {

    console.log(keywords[i] + ' en cours');
    await page.goto('https://google.com/search?q=' + keywords[i]);
    await page.screenshot({path: 'screens/' + Date.now() + keywords[i] + '.png', fullPage: true });
    await page.goto('https://google.com/search?q='  + keywords[i] + '&start=10');
    await page.screenshot({path: 'screens/' + Date.now() + keywords[i] + '_page_2.png', fullPage: true });
    await page.goto('https://google.com/search?q='  + keywords[i] + '&start=20');
    await page.screenshot({path: 'screens/' + Date.now() + keywords[i] + '_page_3.png', fullPage: true });
    await page.goto('https://google.com/search?q='  + keywords[i] + '&start=30');
    await page.screenshot({path: 'screens/' + Date.now() + keywords[i] + '_page_4.png', fullPage: true });
    await page.goto('https://google.com/search?q='  + keywords[i] + '&start=40');
    await page.screenshot({path: 'screens/' + Date.now() + keywords[i] + '_page_5.png', fullPage: true });
  }

  console.log('Fin');
  await browser.close();
})();
