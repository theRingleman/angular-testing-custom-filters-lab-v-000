describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter and return the people with the same favorite food', function () {
		var people = [{name: "Sam", 	favoriteFood: "Pizza"}, {name: "Not Sam", favoriteFood: "Ham"}];

		var results = $filter('favoriteFood')(people, "Pizza");
		expect(results.length).toBe(1);
		expect(results[0].favoriteFood).toBe("Pizza");
	});

});
