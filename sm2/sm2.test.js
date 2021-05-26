const SM2 = require('./sm2');

test('calculate simple', () => {
    const previous = new SM2(1, 2, 3, 4);
    expect(SM2.calculate(previous)).toEqual({ "previousEaseFactor": 4, "previousInterval": 3, "quality": 1, "repetitions": 2 });
});