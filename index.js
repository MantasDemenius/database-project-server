const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

app.use(cors());
app.use(express.json());

//Localhost
// const conn = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'restoranas_v4',
//   dateStrings: 'date'
// });

//HEROKU
// const conn = mysql.createConnection({
//   host     : 'ou6zjjcqbi307lip.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//   user     : 'nbiiabwbnzlzrf4p',
//   password : 'ljytjd8hp0oevo9p',
//   database : 'k8yvzge5zm4v1wgf'
// });

// my CLEARDB_DATABASE_URL: mysql://b9e4b9609169bd:ef98abad05b8d68@us-cdbr-iron-east-02.cleardb.net/heroku_4a047a9c92e88c3?reconnect=true

//KTU server
// const conn = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'mandem',
//   password : 'ih1chooPhiemuw4e',
//   database : 'mandem'
// });

//Heroku CLEARDB
const conn = mysql.createConnection({
  host     : 'us-cdbr-iron-east-02.cleardb.net',
  user     : 'b9e4b9609169bd',
  password : 'ef98abad05b8d68',
  database : 'heroku_4a047a9c92e88c3',
  dateStrings: 'date'
});

conn.connect(function(err){
  (err)? console.log(err) : console.log("all good my man with connection");
});

// Serve any static files built by React
// app.use(express.static(path.join(__dirname, "client/build")));
//
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "client/build", "index.html"));
// });

require('./routes/CompaniesRoute')(app, conn);
require('./routes/RestaurantsRoute')(app, conn);
require('./routes/SuppliersRoute')(app, conn);
require('./routes/ClientsRoute')(app, conn);
require('./routes/CommentsRoute')(app, conn);

// Handles any requests that don't match the ones above
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
