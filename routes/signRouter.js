const User = require('../models/user');
const jwt = require('jsonwebtoken');


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
      var token = jwt.sign({
        login,
        password
      }, "mytestserver");
      res.send({
          ok: "user Created",
          token,
          user
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

    var token = jwt.sign({
      login,
      password
    }, "mytestserver");

    if (user) res.send({
      token,
      user,
      ok: "login"
    })

    else {
      res.send({
        ko: "error"
      })

    }

  })


















}