const express = require('express');

const app = express();
app.listen(4000, function () {
    console.log('listening on 4000')
});

var mssql = require("mssql");
var dbConfig_user = {
    server: "xxx.xxx.x.xx",
    database: "xxx",
    user: "xx",
    password: "xx",
    port: 00
};

mssql.connect(dbConfig_user, function(err){
    if(err){
        return console.error('error : ', err);
    }
    console.log('MSSQL 연결 완료')
});