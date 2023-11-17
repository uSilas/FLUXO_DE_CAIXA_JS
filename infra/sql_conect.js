var sql = require("mssql");

const config = {
  user: "sa",
  password: "sisco12!@",
  server: "MAC-SERVER",
  database: "GerencialPAF_2017",
  options: {
    encrypt: false, // Habilita criptografia SSL/TLS
    trustServerCertificate: false, // Defina como true se você não deseja verificar o certificado SSL do servidor
    requestTimeout: 300000,
  },
};

async function Sql_conect() {
  return new Promise((response, reject) => {
    sql.connect(config, function (err) {
      if (err) {
        reject(err);
      } else {
        response(sql);
      }
    });
  });
}

module.exports = Sql_conect;
