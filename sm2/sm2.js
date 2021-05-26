class SM2 {
    constructor(quality, repetitions, previousInterval, previousEaseFactor) {
        this.quality = quality;
        this.repetitions = repetitions;
        this.previousInterval = previousInterval;
        this.previousEaseFactor = previousEaseFactor;
    }

    static calculate(sm) {
        const response = new SM2(sm.quality, sm.repetitions, sm.previousInterval, sm.previousEaseFactor);
        // TODO: implement algorithm.
        return response;
    }
}

module.exports = SM2;