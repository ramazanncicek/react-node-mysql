const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const app = express();
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'user_name',
    password: 'Your password',
    database: 'Your database'
});
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/*
const cookieParser = require('cookie-parser');
const { cookie } = require('express/lib/response');
const session = require('express-session');
app.use(cookieParser());
app.use(sessions({
  secret: "thisismysecret",
  saveUninitialized:true,
  cookie: { maxAge: 1000*60*5 },
  resave: false
}));
*/
app.listen(port, ()=>{
  console.log(`Server is running on ${port}`)
});
// POST Function for the sectors
app.post('/postsectors',(req,res)=>{
  for(let prop in req.body){
    insertSectors(prop,req.body[prop]);
  }
})
// Edit Box 
app.post('/editsectors',(req,res)=>{
  editSectors(req.body.oldCode,req.body.newName);
  res.send(true);
})

// NEW USER RECORD
app.post('/newuser',(req,res)=>{
  addNewUser(req.body.name,req.body.sector,req.body.agreed);
})
// User Update
app.post('/userupdate',(req,res)=>{
  updateUser(req.body.name,req.body.sector,req.body.agreed);
})
// Refill my form
app.get('/refill/:name',(req,res)=>{
  let name = req.params.name;
  connection.query('SELECT * FROM users WHERE name=?',name,(err,result)=>{
    if(err) res.send(err);
    res.send(result);
  });
});
app.get('/allsectors',(req,res)=>{
  connection.query(`SELECT value FROM sectors WHERE value LIKE '1%' `)
})

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});
addSectors();

// Table Creator Function
function addSectors(){
  let sectors = `create table if not exists sectors(
    sector varchar(255)not null,
    value int primary key
)`;

connection.query(sectors, function(err, results, fields) {
if (err) {
console.log(err.message);
}
});
}
// Inserting Below
function insertSectors(sectorName,sectorValue){
  connection.query(`INSERT IGNORE INTO sectors(sector,value) VALUES(?,?)`,[sectorName,sectorValue],(err,result)=>{
    if(err) console.log(err);
  });
}
// Edit Sectors Below
function editSectors(oldCode,newName){
  connection.query('UPDATE sectors SET sector = ? WHERE value = ? ',[newName,oldCode],(err,result)=>{
    if(err) console.log(err);
  });
}
// New User Function
function addNewUser(userName,userSector,userAgreed){
  // Database
  let users = `create table if not exists users(
    name varchar(255) not null UNIQUE,
    agreed int,
    sector_name varchar(255),
    sector_number int
    )`;

  connection.query(users, function(err, results, fields) {
  if (err) {
  console.log(err.message);
  }
  });
  // User Record Below
  let sectorName;
  let boolSql;
  if(userAgreed) boolSql = 1;
  else boolSql = 0;
  connection.query('SELECT sector FROM sectors WHERE value = ? ',userSector,(err,result)=>{
    if(err) console.log(err);
    sectorName = result[0].sector;
  })
  setTimeout(()=>{
    connection.query(`INSERT IGNORE INTO users(name,sector_name,agreed,sector_number) VALUES(?,?,?,?)`,[userName,sectorName,boolSql,userSector],(err,result)=>{
      if(err) console.log(err);
    });
  },2000)
}
// Update Existing User
function updateUser(userName,userSector,userAgreed){
  let sectorName;
  let updateSql = `UPDATE users SET sector_number=?,sector_name=? WHERE name=?`;
  connection.query('SELECT sector FROM sectors WHERE value = ? ',userSector,(err,result)=>{
    if(err) console.log(err);
    sectorName = result[0].sector;
  })
  setTimeout(()=>{
    connection.query(updateSql,[userSector,sectorName,userName],(err,result)=>{
      if(err) console.log(err);
    console.log(result);
    });
  },2000)
}

