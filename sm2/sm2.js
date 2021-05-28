class SM2 {
    constructor(repetitions, interval, easeFactor) {
        this.repetitions = repetitions;
        this.interval = interval;
        this.easeFactor = easeFactor;
    }

    static calculate(prviousSm, quality) {
        let nextInterval;
        let nextEaseFactor = prviousSm.easeFactor;
        let nextRepetitions = prviousSm.repetitions;

        if (quality >= 3) {
            switch (nextRepetitions) {
                case 0:
                    nextInterval = 1;
                    nextRepetitions = 1;
                    break;
                case 1:
                    nextInterval = 6;
                    nextRepetitions = 2;
                    break;
                default:
                    nextInterval = Math.round((prviousSm.interval * prviousSm.easeFactor));
                    nextRepetitions++;
            }

            nextEaseFactor = prviousSm.easeFactor +
                (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
        } else {
            nextInterval = 1;
            nextRepetitions = 0;
        }

        if (nextEaseFactor < 1.3) nextEaseFactor = 1.3;

        return new SM2(nextRepetitions, nextInterval, parseFloat(nextEaseFactor.toFixed(4)));
    }
}

module.exports = SM2;