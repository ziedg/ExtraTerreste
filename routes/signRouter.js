const User = require('../models/user');
const jwt = require('jsonwebtoken');
const auth = require('./authMiddleware');

module.exports = (app) => {

  //inscrire 

  app.post('/inscrire', async (req, res) => {




    const {
      login,
      password,
      age,
      famille
    } = req.body;

    const extraUser = await User.findOne({
      login
    })

    if (!extraUser) {
      const extra = {
        login,
        password,
        age,
        famille
      }
      const user = new User(extra);
      await user.save()
      var token = jwt.sign(extra, "mytestserver");
      res.send({
          ok: "user Created",
          token
        }

      )
    } else {
      res.send({
          ko: "user exist"
        }

      );

    }
  })








  app.post('/login', async (req, res) => {

    const {
      login,
      password
    } = req.body;

    const user = await User.findOne({
      login,
      password
    })

    console.log(user)

    if (user) res.send({
      ok: "login"
    })

    else{
      res.send({
        ko: "error"
      })
      
    }

  })



  app.get('/users', auth, async (req,res)=>{

actualUser = req.user;

const users = await User.find({});

  const newusers = users.map((user =>{
    const {login,famille} = user;
    if(user.login !== actualUser.login)
    return {login,famille}
  }))

  res.send(newusers);
  })











  



}