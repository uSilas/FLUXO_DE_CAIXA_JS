const { google } = require("googleapis");

async function Execute() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "prime-keel-403812-7f93d2fccf02.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();
  console.log(client);

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1J1L5nSR0ffPCRovrTIEOWgGNWoNn6yMiKkoZ8rUtjeY";

  // Get metadata about spreadsheet
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  // Read rows from spreadsheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1!A:A",
  });

  // Write row(s) to spreadsheet
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1!A:B",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [["Gabriel", "Marques"]],
    },
  });
}

Execute();
