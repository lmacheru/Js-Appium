const func = require("../Helper/MobileCore");
const wd = require('wd');
const mocha = require('mocha');
var testname ="Shaking";
const chai = require('chai');
const capsAndroid = {
    "platformName":"Android",
    "deviceName":"Android Emulator",
    "appActivity":"com.android.dialer.DialtactsActivity",
    "appPackage":"com.android.dialer",
    "androidInstallTimeout":90000,
    "autoGrantPermissions":"true",
    "testobject_api_key":'09D588383E3B4F7BAD6512B5889B0328'
    };
//const caps = func.Capabilities();

describe("android",async function () {
    this.timeout(10*60*1000);
 //   let driver;

    before(async function(){
    driver = wd.promiseChainRemote({
        host:"127.0.0.1",
        port: 4723
        
    });
   await driver.init(capsAndroid).setImplicitWaitTimeout(5000);
    });
  
    after(async function (){
       await driver.quit();
    });
    
    it('Login into app',async function (){
        await func.Click(driver,"StyleId","star")
        await func.Click(driver,"StyleId","one")
        await func.Click(driver,"StyleId","one")
        await func.Click(driver,"StyleId","one")
        await func.Click(driver,"StyleId","pound")


        await func.Click(driver,"StyleId","one")

    });
     
});
