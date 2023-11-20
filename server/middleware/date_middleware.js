module.exports = {
  To_USdate(date) {
    if (typeof date == "string") {
      let data_americana = date.split("-");
      console.log(data_americana);

      let year = data_americana[2];
      let month = data_americana[1];
      let day = data_americana[0];

      let date_formatada = year + "-" + month + "-" + day;
      console.log(date_formatada);

      return date_formatada;
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
