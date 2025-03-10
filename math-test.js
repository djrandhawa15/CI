//the opperation to test the sum of 2 numbers
const sum = require('./math');


test("2+3=5", () => {
    expect(sum(2, 3)).toBe(5);
});

test.skip("-10 + 7 = -3", () => {
    expect(sum(-10, 7)).toBe(-3);
});