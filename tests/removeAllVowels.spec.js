describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should remove all vowels in a word', function () {
		var word = "quick";
		var result = $filter('removeAllVowels')(word);
		expect(result).toEqual("qck");
	});
});
