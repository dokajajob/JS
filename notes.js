
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

    expect(element(by.binding('latest')).getText()).
        toEqual('3'); // This is wrong!
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



