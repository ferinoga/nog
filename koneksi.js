var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nog'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('mysql terkoneksi');
});

module.exports = conn;