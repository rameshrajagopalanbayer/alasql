if (typeof exports === 'object') {
	var assert = require('assert');
	var alasql = require('..');
}

var test = '1356';

describe('Test ' + test + ' - numerical prop names', function () {
	it('SUM with Round function', function () {
		var data = [
			{
				"2_a": 1,
			},
			{
				"2_a": 2,
			},
		];
		res = alasql(
			`SELECT 2_a as a FROM ? where [2_a]=1`,[data]
		);
		assert.deepEqual(res, [
			{

			}
		]);
	});
});
