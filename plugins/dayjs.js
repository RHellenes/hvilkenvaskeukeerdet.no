// disable-eslint
// import Vue from 'vue'
import dayjs from 'dayjs';
// import weekYear from 'dayjs/plugin/weekYear' // ES 2015
// import weekOfYear from 'dayjs/plugin/weekOfYear' // ES 2015
// import utc from 'dayjs/plugin/utc'
import isoWeek from 'dayjs/plugin/isoWeek';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';
import isLeapYear from 'dayjs/plugin/isLeapYear';

export default ({ app }, inject) => {
  // dayjs.extend(utc)
  // dayjs.extend(weekOfYear)
  // dayjs.extend(weekYear)
  dayjs.extend(isoWeeksInYear);
  dayjs.extend(isLeapYear);
  dayjs.extend(isoWeek);

  inject('dayjs', dayjs);
};
