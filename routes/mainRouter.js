const auth = require('./authMiddleware');

const User = require('../models/user');

module.exports = (app)=>{




    app.post('/edit',auth, async (req,res)=>{
     const user = req.user;
    const {login,password,famille,race,age,noriture}  = req.body;
   
     const updatedUser= await User.update({login:user.login},{
        login,
        password,
        famille,
        race,
        age,
        noriture

    })

    res.send({'ok':'user Updated',user:updatedUser})

})



app.get('/getfriends',auth,async (req,res)=>{

    const login = req.user.login;

      const user = await User.findOne({login})

     const users = await  Promise.all(user.friends.map( async login =>{
            const u = await User.findOne({login});
          return u;

              

       }))
      console.log(users)

      
   

})
app.post('/addFriend',auth,async(req,res)=>{

    

    



    
        const user=   await User.update({login:req.user.login},{
            $push:{
                friends:req.body.login
            }});



           
            res.send('friend added!');


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