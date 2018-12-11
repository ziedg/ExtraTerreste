const auth = require("./authMiddleware");

const User = require("../models/user");

//require and confguire multer
var multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, req.user.login + '-' + Date.now())
    }
})

var upload = multer({
    storage: storage
})




module.exports = app => {

  //edit the extraTerresetre profile
  app.post("/edit", auth, async (req, res) => {

    //varibles and consts declartion 
    const user = req.user;
     let updatedUser= null
    const { login, password, familly, race, age,noriture } = req.body;

 try{

  const  actualUser =  await User.findOne({login});
  if( actualUser || user.login !==  login){
       updatedUser = await User.update(
          {
            login: user.login
          },
          {
            login,
            password,
            famille:familly,
            race,
            age,
            norriture:noriture
          }
        );

      
        res.send({
          ok: "user Updated",
          user: actualUser
        });
  }
  else
  {
      res.send({
          ko: "user already exist",
        });
   
 }}

 catch(e){
  res.send({
    error:e,
    ko: "user already exist",
  });
 }
 

  

  

   
  });

  app.get("/getfriends", auth, async (req, res) => {
    const login = req.user.login;

    const user = await User.findOne({
      login
    });

    if(user){

      const users = await Promise.all(
        user.friends.map(async login => {
          const u = await User.findOne({
            login
          });
          return u;
        })
      );
  
      res.send(users)
    }
    else{
      res.send({})
    }
  
  });
  app.post("/addFriend", auth, async (req, res) => {
    const user = await User.update(
      {
        login: req.user.login
      },
      {
        $push: {
          friends: req.body.login
        }
      }
    );

    res.send("friend added!");
  });

  app.post("/deletefriend", auth, async (req, res) => {
    const { login } = req.body;
    const user = await User.findOne({ login: req.user.login });

    let friends = user.friends;
    friends = friends.filter(f => f !== login);

    await User.update(
      {
        login: req.user.login
      },
      {
        friends
      }
    );

    res.send("user deleted");
  });

  app.get("/users", auth, async (req, res) => {
    let actualUser = req.user;

    const users = await User.find({});

    actualUser = await User.findOne({
      login: actualUser.login
    });

    //filter the actaul user

    const newusers = users.map(user => {
      const { login, famille } = user;

      if (
        user &&
        actualUser &&
        user.login !== actualUser.login &&
        !actualUser.friends.includes(user.login)
      )
        return {
          login,
          famille
        };
    });

    res.send(newusers);
  });



  app.post('/upload', auth, upload.single('myFile'), async (req, res) => {

    const user = await User.findOne({
        login: req.user.login
    })

    if (user && req.file) {
        user.imageUrl = `http://localhost:4000/uploads/${req.file.filename}`;
        await user.save()

    }






    res.send({
        ok: "true"
    });

})


};

