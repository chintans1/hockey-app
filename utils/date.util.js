/**
 * Return formatted date string in YYYY-MM-DD format
 *
 * @param {Date} date
 */
const dateFormatter = date => date.toISOString().split('T')[0];

/**
 * Returns the current date in string format (YYYY-MM-DD)
 */
const getCurrentDate = () => {
  return dateFormatter(new Date());
}

export {
  getCurrentDate,
  dateFormatter
}