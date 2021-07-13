const SM2 = require('./sm2');

test('Wrong answer: quality = 1, resets interval and repetitions', () => {
    expect(SM2.calculate({ "easeFactor": 1.3, "interval": 21, "repetitions": 12 },
        /* quality= */
        2)).toEqual({ "easeFactor": 1.3, "interval": 1, "repetitions": 0 });
});

test('Wrong answer: quality = 2, resets interval and repetitions', () => {
    expect(SM2.calculate({ "easeFactor": 1.3, "interval": 21, "repetitions": 12 },
            /* quality= */
            2))
        .toEqual({ "easeFactor": 1.3, "interval": 1, "repetitions": 0 });
});

test('Wrong answer does not change easeFactor', () => {
    expect(SM2.calculate({ "easeFactor": 4, "interval": 21, "repetitions": 12 },
        /* quality= */
        1)).toEqual({ "easeFactor": 4, "interval": 1, "repetitions": 0 });
});

test('Good answer: quality = 3, repetitions = 0, interval = 0', () => {
    expect(SM2.calculate({ "easeFactor": 1.3, "interval": 0, "repetitions": 0 },
        /* quality= */
        3)).toEqual({ "easeFactor": 1.3, "interval": 1, "repetitions": 1 });
});

test('Good answer: quality = 4, repetitions = 0, interval = 0', () => {
    expect(SM2.calculate({ "easeFactor": 1.3, "interval": 0, "repetitions": 0 },
        /* quality= */
        4)).toEqual({ "easeFactor": 1.3, "interval": 1, "repetitions": 1 });
});

test('Good answer: quality = 5, repetitions = 0, interval = 0', () => {
    expect(SM2.calculate({ "easeFactor": 1.3, "interval": 0, "repetitions": 0 },
        /* quality= */
        5)).toEqual({ "easeFactor": 1.4, "interval": 1, "repetitions": 1 });
});

test('Good answer increases interval, repetitions and easeFactor, quality = 5', () => {
    expect(SM2.calculate({ "easeFactor": 2, "interval": 10, "repetitions": 4 },
        /* quality= */
        5)).toEqual({ "easeFactor": 2.1, "interval": 20, "repetitions": 5 });
});

test('Good answer increases interval and repetitions, quality = 4', () => {
    expect(SM2.calculate({ "easeFactor": 2, "interval": 10, "repetitions": 4 },
        /* quality= */
        4)).toEqual({ "easeFactor": 2, "interval": 20, "repetitions": 5 });
});