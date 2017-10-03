describe('test chrome', function (){
    it('test any', function(){
        browser.driver.get('http://www.google.com');
        var path=by.css('.gb_P');
        var element= browser.driver.findElement(path);
        expect(element.getAttribute('textcontent')).toBe(null);
    
    
    
       
        });
    });