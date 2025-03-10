const { sum }= require('./math');

test.each([ [2, 3, 5], [-10, 7, -3] ])(
    'a + b = c', (a, b, expected) => {
        expect(sum(a, b)).toBe(expected);
    }
);