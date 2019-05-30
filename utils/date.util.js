/**
 * Return formatted date string in YYYY-MM-DD format
 *
 * @param {Date} date
 */
const dateFormatter = date => {
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0,10);
}

/**
 * Returns the current date in string format (YYYY-MM-DD)
 */
const getCurrentDate = () => {
  return dateFormatter(new Date());
};

/**
 * Return the time in "HH:MM AM/PM" string format using the date string given.
 *
 * @param {String} dateString
 */
const getTimeFromDate = (dateString) => {
  return new Date(dateString)
    .toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
}

export {
  getCurrentDate,
  dateFormatter,
  getTimeFromDate
}