export function to_Excel(data, nome_arquivo) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Planilha 1");

  data.forEach((row) => {
    worksheet.addRow(row);
  });

  workbook.xlsx
    .writeBuffer()
    .then((buffer) => {
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      // Crie um link de download e clique nele para baixar o arquivo
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = nome_arquivo + ".xlsx";
      link.click();
    })
    .catch((err) => {
      throw new Error("Erro ao gerar o arquivo Excel:", err);
    });
}
