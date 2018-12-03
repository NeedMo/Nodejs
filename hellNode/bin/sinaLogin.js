const puppeteer = require('puppeteer');
(async ()=>{

    const browser = await puppeteer.launch({
        headless:false,
        defaultViewport:{width:1366,height:768}
    });

    const page = await browser.newPage();
    await page.goto('https://weibo.com/');
    console.log("进入页面");
    await page.waitFor('#loginname');

    let loginname = await page.$("#loginname");
    await page.waitFor(2000);
    await loginname.type('15859700485',{delay:100});
    console.log("输入账号");

    let passWord = await page.$("input[name='password']");
    await passWord.type('zcb123',{delay: 100});
    console.log("输入密码");

    let loginButton = await page.$("div[class='W_login_form'][node-type='normal_form'] > div[class='info_list login_btn']>a");
    await loginButton.click();
    console.log('登录');


})();