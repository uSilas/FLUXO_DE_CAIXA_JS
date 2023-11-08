const GoogleSheet = require("../infra/conect_sheet.js");

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
      return { error: error };
    }
  }

  async Update(range, data) {
    const spreadsheetId = this.id_sheet;
    const googleSheets = this.googleSheets;
    const auth = this.auth;

    try {
      await googleSheets.spreadsheets.values.append({
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
      return { error: error };
    }
  }
}

/*
GoogleSheet().then((d) => {
  const Planilha = new Sheet(
    d.googleSheets,
    d.auth,
    "1J1L5nSR0ffPCRovrTIEOWgGNWoNn6yMiKkoZ8rUtjeY"
  );

  Planilha.Clear("A1:Z1000")
    .then((m) => {
      console.log(m);
      Planilha.Update("!A:B", [["Gabriel", ""]]);
    })
    .catch((err) => {
      console.log(err);
    });
});

*/
