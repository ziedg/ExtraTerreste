const auth = require('./authMiddleware');

const User = require('../models/user');

module.exports = (app)=>{

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