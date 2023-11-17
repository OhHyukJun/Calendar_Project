const express = require('express');

const app = express();
app.listen(4000, function () {
    console.log('listening on 4000')
});

let mssql = require("mssql");
let dbConfig_user = {
    server: "10.1.2.92",
    database: "callendar.database.windows.net",
    user: "dhgurwns",
    password: "kmh7277!",
    port: 4000
};

mssql.connect(dbConfig_user, function(err){
    if(err){
        return console.error('error : ', err);
    }
    console.log('MSSQL 연결 완료')
});