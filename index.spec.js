const Ship = require('./index.js')

describe('Verify Ship Class methods and attributes', function () {
    test('Check Destroyer length', function () {
        const Destroyer = new Ship();
        expect(Destroyer.length).toBe(2);
    });
});