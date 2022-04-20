const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const { send } = require('process');
const { link } = require('fs');
const { takeLast } = require('rxjs');

const app = express();

app.use(cors());
app.use(bodyparser.json());


//database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'BSSE-11',
    port:3306
});

//check database connection
db.connect(err=>{
    if(err) {console.log(err,'dberr');}
    console.log('database connected ...')
})


//get all data
app.post('/signup',(req,res)=>{

    console.log(req.body);
    let name = req.body.name;
    let email = req.body.email;
    let qr = `SELECT * FROM Students WHERE name = ? OR email = ?`;

    db.query(qr,[name,email],(err,result)=>{
        if(err)
        {
            console.log(err,'errs');
        }
        if(result.length>0)
        {
            res.send(false);
        }
        else
        {
            let name = req.body.name;
            let email = req.body.email;
            let password = req.body.password;
            // let facebook = req.body.facebook;
            // let github = req.body.github;
            // let linkedin = req.body.linkedin;
                    
            let qr = "INSERT INTO Students (name, email, password) VALUES (?, ?, ?)";
            db.query(qr,[name,email,password],(err,result)=>{
                res.send(true);
            });
             
        }
    });
});


app.post('/login',(req,res)=>{
    console.log(req.body);
    let userName = req.body.userName;
    let password = req.body.password;

    let qr = `SELECT * FROM userInfo WHERE name = ? AND password = ?`;
    db.query(qr, [ userName, password ],(err, result)=> {
    if(err)
    {
        console.log(err,'errs');
    }
    res.send(result);

    });
});


app.listen(3000,()=>{
    console.log('server running......')
});