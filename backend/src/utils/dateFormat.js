/**
 * To convert Date().toJSON() to dd/mm/yyyy format
 */
module.exports = (value) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}/${month}/${day}`;
};
