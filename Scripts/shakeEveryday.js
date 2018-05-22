const func = require("../Helper/MobileCore");
const wd = require('wd');
const mocha = require('mocha');
var testname ="Shaking";
const chai = require('chai');

//const caps = func.Capabilities();

describe("android",async function () {
    this.timeout(10*60*1000);
 //   let driver;

    before(async function(){
    driver = wd.promiseChainRemote({
        host:"127.0.0.1",
        port: 4723
        
    });
   await driver.init(func.Capabilities()).setImplicitWaitTimeout(5000);
    });
  
    after(async function (){
      // await driver.quit();
    });
    
    it('Login into app',async function (){

        await func.takescreenshots(driver,testname,"EnviromentPicker")
        await func.Click(driver,"Xpath","\/\/android.widget.TextView[@text=\"LIVE PROD\"]");

        await func.Sendkeys(driver,"StyleId","Cellphone Number Text Box","0715135502")
        await func.takescreenshots(driver,testname,"Bypass")
       
        var i = await func.GetText(driver,"Proceed button")
        await func.AssertText(chai,i,"Proceed")
        await func.Click(driver,"StyleId","Proceed button")

        //login Page====================================================
        await func.Sendkeys(driver,"StyleId","User name","0828718645")
        await func.takescreenshots(driver,testname,"LoginPage")
        await func.Sendkeys(driver,"StyleId","Password","Testing1")

        await func.Click(driver,"StyleId","Login")
        await func.WaitforSpinner(driver)       
        //==============================================================
        await func.Click(driver,"StyleId","Menu")
        await func.takescreenshots(driver,testname,"Menu")

        await func.Click(driver,"StyleId","Buy")
        await func.takescreenshots(driver,testname,"Menu-Buy")
        await func.Click(driver,"StyleId","Bundles")

        //======Buying bundles===================================
        await func.Click(driver,"Xpath","\/\/android.widget.Button[@text=\"Proceed\"]");
        await func.WaitforSpinner(driver)       
        await func.takescreenshots(driver,testname,"DataSize")

        await func.Click(driver,"Xpath","\/\/android.widget.Button[@text=\"Proceed\"]");
        await func.WaitforSpinner(driver)     
        await func.takescreenshots(driver,testname,"Purchase summary")

        await func.Click(driver,"StyleId","ProceedID")
        await func.WaitforSpinner(driver)     
        await func.takescreenshots(driver,testname,"Bought")

        var msg =await func.GetText(driver,"Message")
        await func.AssertText(chai,msg,"You do not have enough airtime. Please select a cheaper bundle or buy airtime first.")

        await func.Click(driver,"StyleId","OkButton")
        await func.WaitforSpinner(driver)     
        //==============================================================
        await func.Click(driver,"StyleId","Back")
        await func.Click(driver,"StyleId","Back")
        await func.Click(driver,"StyleId","Back")

        //============================================================

        //Logout

        await func.Click(driver,"StyleId","Menu")
        await func.Click(driver,"StyleId","Help")
        await func.takescreenshots(driver,testname,"Help")

        await func.Click(driver,"StyleId","Logout")
        await func.WaitforSpinner(driver)     
        await func.takescreenshots(driver,testname,"Logged Out")



    });
});

