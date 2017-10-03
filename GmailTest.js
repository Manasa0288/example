var objects = require("./Objects.json");

describe('Facebook', function (){
    it('dropdown', function()
    {
        browser.driver.get(objects.testsiteurl);
        browser.manage().timeouts().implicitlyWait(5000);
        browser.driver.sleep(10000);
    });

        it("validate user credentials", function()
        {
            var locat1=browser.driver.findElement(by.xpath(objects.Locators.loginpage.username));
            locat1.sendKeys(objects.Locators.userdetails.username);
            var locat2=browser.driver.findElement(by.xpath(objects.Locators.loginpage.next));
            locat2.click();
            browser.driver.sleep(10000);
        });
});








// var Objects=require('./Objects.json');

// describe("Test Gmail",function()
// {
    
//     beforeEach(function()
//     {
//         browser.ignoresynchronization=true;
//         browser.get("http://www.gmail.com");
//         Console.log("Test Site URL is:"+Objects.testsiteurl);
//     });

//     it("validate user credentials", function()
//     {
//         element(by.xpath(Objects.locators.loginpage.username)).Sendkeys(Objects.userdetails.username);
//         element(by.id(Objects.locators.loginpage.next)).click();

//     });


// });
