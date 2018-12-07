

const User = require('../models/user');
const jwt = require('jsonwebtoken');
const auth = require('./authMiddleware');

module.exports = (app)=>{

//inscrire 

app.post('/inscrire', async (req,res)=>{




  const {login,password,age,famille} = req.body;

 const  extraUser = await  User.findOne({login})

if(! extraUser)
{
  const extra = {login,password,age,famille}
  const user = new User(extra);
    await user.save()
    var token = jwt.sign(extra, "mytestserver");
    res.send({
      ok:"user Created",
      token
    }
    
    )
  }
  else
  {
    res.send({
      ko:"user exist"
    }
  
  );

  }})


  



  

    app.post('/login',async (req,res)=>{
     
      const {login,password}= req.body;
      
      const user = await User.findOne({login,password})

      console.log(user)

      if(user)    res.send({ok:"login"})

    })













//login route
// app.post('/login', async  (req, res) => {
//     const { login, password } = req.body;
     
//     try {
//     const user = await  User.findOne({login})
//     if (!user){
    
//         console.log('user not found');
//   }


//   if (login== user.login && password == user.password ) {
    
//     let token = jwt.sign({ id: user.id, username: user.username }, 'keyboard cat 4 ever', { expiresIn: 129600 }); // Sigining the token
//     res.json({
//         sucess: true,
//         err: null,
//         token
//     });
//     break;
// }
// else {
//     res.status(401).json({
//         sucess: false,
//         token: null,
//         err: 'Username or password is incorrect'
//     });
// }

// }
    
//     catch(e){
//         console.log("error")
//     }
       
// });





}