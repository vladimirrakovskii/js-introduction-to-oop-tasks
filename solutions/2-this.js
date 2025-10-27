// BEGIN
export default (numerator = 0, denominator = 1) => {
    const makeRational = (num, den) => {
      if (den === 0)
        return null; 
  
      const rationalNumber = {
        numerator: num,
        denominator: den,
  
        getNumer() {
            return this.numerator;
        },
        getDenom() {
            return this.denominator;
        },
        toString() {
            return `${this.numerator}/${this.denominator}`;
        },
  
        setNumer(newNum) {
            this.numerator = newNum;
        },
  
        setDenom(newDen) {
            if (newDen === 0) {
                return;
            }
            this.denominator = newDen;
        },

        add(otherRational) {
            const newNum = (this.numerator * otherRational.denominator) + (this.denominator * otherRational.numerator);
            const newDen = this.denominator * otherRational.denominator;
            return makeRational(newNum, newDen);
        },
      };
  
      return rationalNumber;
    }
  
    if (denominator === 0) {
      return null;
    }
  
    return makeRational(numerator, denominator);
  }
// END
