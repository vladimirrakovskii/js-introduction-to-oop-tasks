// BEGIN
class Money {
  static exchangeRates = {
    'usd': { 'eur': 0.7 },
    'eur': { 'usd': 1.2 }
  };

  constructor(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
  }

  getValue() {
    return this.value;
  }

  getCurrency() {
    return this.currency;
  }

  exchangeTo(targetCurrency) {
    if (this.currency === targetCurrency) {
      return new Money(this.value, this.currency);
    } else {
      const rate = Money.exchangeRates[this.currency][targetCurrency];
      if (rate === undefined) {
        throw new Error(`Conversion rate from ${this.currency} to ${targetCurrency} not defined`);
      }
      const convertedValue = this.value * rate;
      return new Money(convertedValue, targetCurrency);
    }
  }

  add(otherMoney) {
    let otherInThisCurrency;
    if (otherMoney.getCurrency() !== this.currency) {
      otherInThisCurrency = otherMoney.exchangeTo(this.currency);
    } else {
      otherInThisCurrency = otherMoney;
    }
    const sumValue = this.value + otherInThisCurrency.getValue();
    return new Money(sumValue, this.currency);
  }

  format() {
    const currencySymbols = {
      'usd': 'USD',
      'eur': 'EUR'
    };
    const symbol = currencySymbols[this.currency] || this.currency.toUpperCase();
    return this.value.toLocaleString(undefined, { style: 'currency', currency: this.currency });
  }
}

export default Money;
// END
