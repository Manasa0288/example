describe('Nationwide', function(){
    it('dropdown', function(){
        browser.driver.get('https://www.nationwide.com/');
        browser.manage().timeouts().implicitlyWait(5000);
        var locat1=browser.driver.findElement(by.xpath("//input[@id='zipInput']"));
        locat1.sendKeys('75006');
        //browser.driver.sleep(10000);
        var locat2=browser.driver.findElement(by.xpath("//*[@type='submit'][@name='getQuote']"));
        locat2.click();
        browser.driver.sleep(10000);
        
    });
});