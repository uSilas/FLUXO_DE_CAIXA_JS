//extrair dados de file exlsx

export function getDataXlsx(file) {
  return new Promise((resolve, reject) => {
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });

        // Aqui você pode acessar as planilhas e os dados
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        resolve(excelData);
      };

      reader.readAsBinaryString(file);
    }
  });
}
