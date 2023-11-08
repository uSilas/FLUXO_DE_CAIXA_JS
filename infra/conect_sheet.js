const { google } = require("googleapis");

async function GoogleSheet() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "infra/key_google_sheet.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  try {
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });

    return { googleSheets: googleSheets, auth: auth };
  } catch (error) {
    return "usuario não conectado";
  }
}

module.exports = GoogleSheet;
