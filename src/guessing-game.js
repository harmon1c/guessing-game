class GuessingGame {
    //set defaults
    constructor() {
        this.min = 0;
        this.max = 0;
        this.solution = 0;
    }
    //range
    setRange(min, max) {
      this.min = min;
      this.max = max;
    }
    //mean value
    guess() {
      this.solution = Math.ceil((this.min + this.max) / 2);
      return this.solution;
    }
    //if guess value is too high -> lower range to upper mean
    lower() {
      this.max = this.solution;
    }w
    //if guess value is too low -> lower range to lower mean
    greater() {
      this.min = this.solution;
    }
}

module.exports = GuessingGame;
