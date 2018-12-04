const puppeteer = require('puppeteer');
(async ()=>{

    const browser = await puppeteer.launch({
        headless:false,
        defaultViewport:{width:1366,height:768}
    });

    const page = await browser.newPage();
    await page.goto('https://weibo.com/5350509769/H5zLEiLrU?ref=feedsdk&type=comment#_rnd1543934873850');
    console.log("进入页面");
    await page.waitFor(10000);

    // await page.screenshot({path: 'sina.png'});
    console.log("截图");

    let name = await page.$eval("div[class='WB_info']>a[class='W_f14 W_fb S_txt1']",e=>e.href);
    console.log(name);
    await page.goto(name);
    console.log("跳转到主页面");

    await page.waitFor(5000);
    let more = await page.$("div[class='PCD_person_info']>a[class='WB_cardmore S_txt1 S_line1 clearfix']");
    await more.click();
    console.log("点击更多");

    await page.waitFor("div[class='layer_login_register_v2 clearfix']");
    let accout = await page.$("input[name='username']");
    await accout.type("15859700485",{delay:100});

    let password = await page.$("input[name='password']");
    await password.type("zcb123",{delay: 100});

    let login = await page.$("a[class='W_btn_a btn_34px']");
    await login.click();

    console.log("登录");

    await page.waitFor(5000);

    let more1 = await page.$("div[class='PCD_person_info']>a[class='WB_cardmore S_txt1 S_line1 clearfix']");
    await more1.click();
    await page.waitFor(2000);
    await page.screenshot({path: 'info.png'});
    console.log("个人信息截图");









})();