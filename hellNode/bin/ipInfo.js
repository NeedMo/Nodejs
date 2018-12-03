const puppeteer = require('puppeteer');
(async ()=>{

    const browser = await puppeteer.launch({
        headless:false,
        defaultViewport:{width:1920,height:1080}
    });

    const page = await browser.newPage();
    await page.goto('http://www.miitbeian.gov.cn/publish/query/indexFirst.action');
    console.log("进入页面");

    await page.waitFor(5000);
    let menuFrame = await page.frames().find(f=>f.name() ==='LeftMenu');
    let alink = await menuFrame.$('#webfx-tree-object-3-anchor');
    await alink.click();
    console.log("备案信息查询");

    let mainFrame = await page.frames().find(f=>f.name() ==='MainMenu');
    await page.waitFor(2000);
    let blik =await mainFrame.$('#z1');
    await blik.click();
    await blik.type("https://www.baidu.com",{delay:100});
    console.log("輸入地址");

    let getCode = await mainFrame.$("#getCheckCode");
    await getCode.click();
    console.log("获取验证码点击");

    let codeInput = await mainFrame.$("#textfield7");
    await codeInput.type('123456',{delay: 100});
    console.log("输入验证码")

    let submitButton = await mainFrame.$('#button1');
    await submitButton.click();
    console.log("提交");










})();