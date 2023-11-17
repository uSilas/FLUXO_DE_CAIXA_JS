module.exports = {
  To_USdate(date) {
    if (typeof date == "string") {
      let data_americana = date.split("-").reverse().join("-");
      return data_americana;
    } else {
      return false;
    }
  },
  isValid(date) {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    const valid = regex.test(date) && !isNaN(new Date(date).getTime());

    if (valid) {
      return valid;
    } else {
      return false;
    }
  },
};
