var fs = require('fs');
var path ="../Screenshots";

exports.CloudIOS = function(devicename){
    const IOScaps ={
    'device' :devicename,
    'browserstack.local' : true,
    'browserstack.user' : 'ahh8',
    'browserstack.key' : 'uu5VdgUQFAL8HNUSaiFm',
    'build' : 'Node IOS',
    'name': 'single_test',
    'app':'bs://ccaa43dbd8428066c18d79627d0a97d21ce995d2',
    "autoGrantPermissions":"true",
    'browserstack.debug' : true,
    'realMobile':true
}
    return IOScaps;
}



exports.CloudAndroid = function(devicename){
const Androidcaps = {
    'device' : devicename,
    'browserstack.local' : true,
    'browserstack.user' : 'ahh8',
    'browserstack.key' : 'uu5VdgUQFAL8HNUSaiFm',
    'build' : 'Node Android',
    'name': 'single_test',
    'app' : 'bs://76de15ef11a59e8097fb929d20f17498e342c961',
    "autoGrantPermissions":"true",
    'browserstack.debug' : true,
    'realMobile':true
}
    return Androidcaps;
}
//Find elements
    async function findElement (driver,type,elementValue) {

    if(type == 'StyleId'){
        await driver.elementByAccessibilityId(elementValue);
        return  await driver.elementByAccessibilityId(elementValue);
        console.log("Found");

    }
    else
    if
    (type == 'Xpath'){
     //  await driver.waitForElementByXPath(elementValue,5000);
       return await driver.waitForElementByXPath(elementValue,5000);
       console.log("Found");

   }
   else
   if (type == 'text'){
    //  await driver.waitForElementByXPath(elementValue,5000);
      return await driver.waitForElementBytext(elementValue,5000);
      console.log("Found");

  }
};
//Click
exports.Click = async function (driver,type,elementValue) { 
    var x = await findElement(driver,type,elementValue);
 //   console.log(x);
    x.click();
};
//Sendkeys
exports.Sendkeys = async function(driver,type,elementValue,text) {

    var keys = await findElement(driver,type,elementValue);
  //  console.log(keys);
    keys.sendKeys(text);
};

exports.takescreenshots = async function(driver,testname,filename){

    try{
        fs.mkdirSync(path);
        fs.mkdirSync(path+"/"+testname)
        }catch(err){
            if(err.code == 'EEXIST'){
                console.log('The directory exists');
               
            }
            else
            {
                console.log(err);
            }
        }      

       await driver.takeScreenshot().then(function (base64Image) {
            var decodedImage = new Buffer(base64Image, 'base64');
            fs.writeFile('image.jpg', decodedImage, function(err) {});

            fs.rename("image.jpg",path+"/"+testname+"/"+filename+".jpg",function(err){
                if(err){
                    console.log(err);
                    console.log("Create folder and move");
                }
                else
                {
                    console.log("file moved");  
                }
            });
            console.log('took screenshot');
        
        });
  
};

exports.IsButtonEnabled = async function (driver,StyleId){
    let element = await driver.waitForElementById(StyleId,5000);
    let isEnabled = await element.isEnabled();
   console.log(isEnabled);
}
exports.GetText =async function(driver,StyleId){
  return  await driver.elementByAccessibilityId(StyleId).text();
}

exports.AssertText = async function(chai,i,text){
    chai.assert.equal(i, text, "oops,"+text+" is not equal to "+i);
}
exports.resetApp = async function(driver){
   
    //reset App to start new script from enviroment picker
    await driver.resetApp();
}

exports.toggleWIFI = async function(driver){
    //changes the state of WIFi
    await driver.toggleWiFi();

};

exports.toggleLocation = async function(driver){
      //changes the state of location to be on /off
    await driver.toggleLocationServices();

}
exports.WaitforSpinner = async function(driver){
    //wait for loading spinner
    await driver.setImplicitWaitTimeout(5000);
        let cond = await driver.hasElementByAccessibilityId("Spinner");
        console.log('element found '+cond)
       var max_attempts =0;
        while(cond == true){
          console.log('attempts left', max_attempts)
          cond = await driver.hasElementByAccessibilityId("Spinner");
          console.log('element found inside '+ cond)
          max_attempts++;
        }
        console.log(`existing with -> ${cond}`)
        await driver.setImplicitWaitTimeout(5000);
}
