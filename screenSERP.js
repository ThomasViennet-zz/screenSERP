const puppeteer = require('puppeteer');

(async () => {
  console.log('Initialisation');
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();

  var keywords = ['mot', 'mot+cle'];
  console.log('Mots clés :' + keywords);

  for (var i = 0; i < keywords.length; i++) {

    console.log(keywords[i] + ' - Google');

    console.log(keywords[i] + ' : Google - page 1');
    await page.goto('https://google.com/search?q=' + keywords[i]);
    await page.screenshot({path: 'screens/google/' + Date.now() + keywords[i] + '.png', fullPage: true });

    console.log(keywords[i] + ' : Google - page 2');
    await page.goto('https://google.com/search?q='  + keywords[i] + '&start=10');
    await page.screenshot({path: 'screens/google/' + Date.now() + keywords[i] + '_page_2.png', fullPage: true });

    console.log(keywords[i] + ' : Google - page 3');
    await page.goto('https://google.com/search?q='  + keywords[i] + '&start=20');
    await page.screenshot({path: 'screens/google/' + Date.now() + keywords[i] + '_page_3.png', fullPage: true });
  }

  console.log('Bing');
  for (var i = 0; i < keywords.length; i++) {

    console.log(keywords[i]);

    console.log(keywords[i] + ' : Bing - page 1');
    await page.goto('https://bing.com/search?q=' + keywords[i]);
    await page.screenshot({path: 'screens/bing/' + Date.now() + keywords[i] + '.png', fullPage: true });

    console.log(keywords[i] + ' : Bing - page 2');
    await page.goto('https://bing.com/search?q='  + keywords[i] + '&first=10');
    await page.screenshot({path: 'screens/bing/' + Date.now() + keywords[i] + '_page_2.png', fullPage: true });

    console.log(keywords[i] + ' : Bing - page 3');
    await page.goto('https://bing.com/search?q='  + keywords[i] + '&first=20');
    await page.screenshot({path: 'screens/bing/' + Date.now() + keywords[i] + '_page_3.png', fullPage: true });
  }

  console.log('Fin');
  await browser.close();
})();
