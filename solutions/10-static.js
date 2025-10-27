export default class Time {
  // BEGIN
static fromString(timeAsString) {
    const parts = timeAsString.split(':');
    const hour = parseInt(parts[0], 10);
    const minute = parseInt(parts[1], 10);
    return new Time(hour, minute);
  }
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
