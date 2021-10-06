'use strict';

var response = require ('./res');
var connection = require('./koneksi');

exports.index =function(req,res){
    response.ok("Aplikasi REST API ku berjalan!",res)
};

//menampilkan semua data siswa
exports.tampilsemuasiswa = function(req,res){
    connection.query('SELECT * FROM siswa',function(error, rows, fileds){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data siswa berdasarkan id
exports.tampilberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM siswa WHERE id_siswa = ?', [id],
        function(error, rows, fileds){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res)
            }
        });
    
};


//menambahkan data siswa
exports.tambahsiswa = function(req,res){
    var nama = req.body.nama;
    var kelas = req.body.kelas;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO siswa (nama,kelas,jurusan) VALUES(?,?,?)',
    [nama,kelas,jurusan],
        function(error, rows, fields){
            if(error){
            console.log(error);
        }else{
            response.ok("berhasil menambahkan data!",res)
        
        }
    });

};

//mengubah data berdasarkan id
exports.ubahsiswa = function(req,res){
    var id = req.body.id_siswa;
    var nama = req.body.nama;
    var kelas = req.body.kelas;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE siswa SET nama=?, kelas=?, jurusan=? WHERE id_siswa=?',[nama,kelas,jurusan,id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("berhasil ubah data",res)
            }
        });
};


//menghapus data berdasarkan id
exports.hapussiswa = function(req,res){
    var id = req.body.id_siswa;
    connection.query('DELETE FROM siswa WHERE id_siswa=?',[id],
    function(error, rows, fields){
        if(error) {
            console.log(error);
        }else{
            response.ok("berhasil menghapus data",res)
        }
    });
};