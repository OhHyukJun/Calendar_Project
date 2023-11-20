const express = require("express");
const { ConnectionPool } = require("mssql");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const dbConfig = {
  server: "callendar.database.windows.net",
  database: "Callendar",
  user: "dhgurwns@callendar",
  password: "kmh7277!",
  port: 1433,
  options: {
    encrypt: true,
    trustServerCertificate: false,
  }
};

const pool = new ConnectionPool(dbConfig);
pool.connect().then(() => {
  console.log('MSSQL 연결 완료');
}).catch(err => console.log('MSSQL 연결 오류', err));

app.post('/event', function (req, res) {
    const event = req.body;
    const sqlQuery = "이벤트 등록";
    const params = [event.title, event.start, event.end];

    pool.request().query(sqlQuery, params).then(result => {
      res.status(200).json({ id: result.recordset[0].id });
    }).catch(err => {
      console.error('error : ', err);
      res.status(500).send('이벤트 등록 에러');
    });
});

app.listen(4000, function () {
    console.log('listening on 4000');
});
