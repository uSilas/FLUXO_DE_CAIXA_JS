class Sheet {
  constructor(googleSheets, auth, id_sheet) {
    this.googleSheets = googleSheets;
    this.id_sheet = id_sheet;
    this.auth = auth;
  }

  async Clear(range) {
    const googleSheets = this.googleSheets;
    const spreadsheetId = this.id_sheet;
    const auth = this.auth;

    try {
      await googleSheets.spreadsheets.values.clear({
        auth,
        spreadsheetId,
        range: range,
      });

      return { message: "ok" };
    } catch (error) {
      throw new Error(error);
    }
  }

  async Update(range, data) {
    const spreadsheetId = this.id_sheet;
    const googleSheets = this.googleSheets;
    const auth = this.auth;

    try {
      const response = await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: range,
        valueInputOption: "USER_ENTERED",
        resource: {
          values: data,
        },
      });

      return { message: "ok" };
    } catch (error) {
      throw new Error({ error: error });
    }
  }
}

module.exports = Sheet;
