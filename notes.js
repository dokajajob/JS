
==================================================
exports.config = {                                  //conf.js
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js']
};

==================================================

describe('Protractor Demo App', function() {  //should be a astart in each test file (describe can appear under describe)
});                						<--- //final closer

---------------------------------------------------

beforeEach(function(){
	browser.get('http://juliemr.github.io/protractor-demo/');  //executes before each test (beforeEach can appear under each describe)
});

--------------------------------------------------

afterEach(function(){
	console.log("After method executed");               //executes after each test (afterEach can appear under each describe)
	// body...
})

--------------------------------------------------

  it('should add one and two', function() {
    
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).toEqual('3'); // This is wrong!
  });


--------------------------------------------------

  it('should be on correct page', function() {
	expect(browser.getCurrentUrl().toContain("http://juliemr.github.io/protractor-demo"));
	expect(browser.getCurrentUrl().toEqual("http://juliemr.github.io/protractor-demo"));  //chech url
});

---------------------------------------------------
  it('should be on correct page', function() {
  	
  	var textMessage = 'Test string';

  	element(by.model("person.name")).sendKeys(textMessage);
  	element(by.binding("person.name")).getText().then(function(text)){
  		expect(text).toEqual("Test string");
});

---------------------------------------------------

browser.sleep('5000') //wait 5 sec

--------------------------------------------------

element(by.model('first')).clear(); //clear value 

--------------------------------------------------

expect(model.getText()).not.toContain('abcdef') //negative

----------------------------------------------------

it('should be on correct page', function() {
  	element(by.buttonText("CONTINUE")).click();
  	element(by.model("animal")).$("[value='1']").click();

  	element.all(by.css("ng-presitne option")).then(function(items) { //by class (option) is child
  		expect(items.length).toBe(4);
  		expect(items[1].getText()).toBe("text of choice 1");
  		// body...
  	});


-------------------------------------------------

https://stackoverflow.com/questions/31744526/protractor-checking-if-input-field-has-text

-------------------------------------------------

expect(hasClass(element(by.name('your-element')), 'ng-invalid')).toBe(true);
expect(hasClass(element(by.name('your-element')), 'ng-dirty')).toBe(true);

------------------------------------------------

https://www.seleniumeasy.com/protractor-angularjs-tutorials/ways-to-check-if-element-is-present-example

------------------------------------------------

https://namitamalik.github.io/E2E-testing-with-Protractor/


exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }]
};


**** can be used as complete test ***


(function () {
    function openApplicationInBrowser() {
        browser.get("http://localhost:8080/creditCard.html");
    }
    describe('Saving Credit Card Number', function () {
        beforeEach(function () {
            openApplicationInBrowser();
        });
        it('should have correct title', function () {
            expect(browser.getTitle()).toEqual('Credit Card');
        });
        it('checks if the input field is by default disabled', function () {
            expect(element(by.model('data.cardNumber')).isEnabled()).toBe(false);   *** check if can be used with button ***
            expect(element(by.id('save')).isEnabled()).toBe(false);
        });
        it('enables the input field', function () {
            element(by.model('data.checkCard')).click();
            expect(element(by.model('data.cardNumber')).isEnabled()).toBe(true);
        });
        it('gives an error message on writing invalid credit card number', function () {   *** test this ***
            element(by.model('data.checkCard')).click();
            element(by.model('data.cardNumber')).sendKeys("abcdefghijkikiki");
            element(by.id('save')).click();
            expect(element(by.binding('errorMessage')).getText()).toEqual("Credit card number can have only Numbers(0-9)");
        });
        it('gives a success message on writing a valid credit card number', function () {    *** test this ***
            var cardNumber = "1234567899009876";
            element(by.model('data.checkCard')).click();
            element(by.model('data.cardNumber')).sendKeys(cardNumber);
            element(by.id('save')).click();
            expect(element(by.binding('successMessage')).getText()).toEqual("Your credit card number " + cardNumber + " has been saved with us.");
        });
        it('gives an error message when credit card number entered is less than 16 digits', function () {   *** test this ***
            element(by.model('data.checkCard')).click();
            element(by.model('data.cardNumber')).sendKeys("1234567890");
            element(by.id('save')).click();
            expect(element(by.binding('errorMessage')).getText()).toEqual("Please enter a valid credit card number");
        });
    });
})();