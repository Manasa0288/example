describe("Adopt an animal on the zoo test site",function(){
    it("should able on correct page",function(){
        browser.get("http://www.thetestroom.com/1swebapp/");
        expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/1swebapp/");
});
it("should generate correct text", function(){
    browser.get("http://www.thetestroom.com/1swebapp/");
    var textMessage="Subscribe to my cahnnel for more videos";
    element (by.model("person.name")).sendKeys(textMessage);
    element(by.binding("person.name")).getText().then(function(text){
        expect(text).toEqual("Subscribe to my channel for more videos");

    });
});
it("should check the correct number of items in drop down",function(){
    browser.get("http://www.thetestroom.com/1swebapp/");
    element(by.buttonText("CONTINUE")).click();
    element(by.model("animal")).$("[value='1']").click();
    element.all(by.css(".ng-pristine option")).then(function(items){
        expect(items.length).toBe("George the Title");
    });
    element(by.buttonText("CONTINUE")).click();
});
it("should check user is on the thank you page", function(){
    browser.get("http://www.thetestroom.com/1swebapp/");
    element(by.buttonText("CONTINUE")).click();
    element(by.buttonText("CONTINUE")).click();
    expect(browser.getCurrentUrl()).toContain("Confirm");
});
});


