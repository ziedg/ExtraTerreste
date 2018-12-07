const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const mongoose = require('mongoose');




mongoose.connect('mongodb://localhost:27017/db')
  .then(()=>{
      console.log-("user Connected .")
  })
  .catch((err)=>{
      console.log('failed to connect due To :',err)
  })

const PORT = 4000 | process.env.PORT;

const app = express();


//express middlewares

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


//custom middleware


//cors
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
})


const jwtMW = exjwt({
    secret: 'mysecret'
});

//routes

require('./routes/signRouter')(app);








app.listen(PORT, ()=>{
    console.log(`server is up  at port ${PORT}`)
})


