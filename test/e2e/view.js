describe('Testing app view', function () {
    describe('As a user I want to be able to test the home view', function () {
        browser.get('index.html');

        it('should test an element', function () {
            var input = element(by.model('name'));
            expect(input.getAttribute('value')).toEqual('pippo');
            input.clear()
                .then(function () {
                    input.sendKeys('foo');
                    return element(by.css('button')).click();
                })
                .then(function () {
                    expect(input.getAttribute('value')).toEqual('foo');
                });
        });
    });

    xdescribe('As a user I want to be able to test angular router views', function () {
        browser.get('index.html#/user');

        it('should have written the user div', function () {
            expect(element(by.css('.user')).getText()).toEqual('foo');
        });
    });
});