const auth = require('./authMiddleware');

const User = require('../models/user');

module.exports = (app) => {




    app.post('/edit', auth, async (req, res) => {
        const user = req.user;
        const {
            login,
            password,
            famille,
            race,
            age,
            noriture
        } = req.body;

        const updatedUser = await User.update({
            login: user.login
        }, {
            login,
            password,
            famille,
            race,
            age,
            noriture

        })

        res.send({
            'ok': 'user Updated',
            user: updatedUser
        })

    })



    app.get('/getfriends', auth, async (req, res) => {

        const login = req.user.login;

        const user = await User.findOne({
            login
        })


        const users = await Promise.all(user.friends.map(async login => {
            const u = await User.findOne({
                login
            });
            return u;





        }))

        res.send(users)




    })
    app.post('/addFriend', auth, async (req, res) => {








        const user = await User.update({
            login: req.user.login
        }, {
            $push: {
                friends: req.body.login
            }
        });




        res.send('friend added!');


    })






    app.get('/users', auth, async (req, res) => {

        let actualUser = req.user;

        const users = await User.find({});

        actualUser = await User.findOne({
            login: actualUser.login
        })





        //filter the actaul user




        const newusers = users.map((user => {
            const {
                login,
                famille
            } = user;

            if (user && user.login !== actualUser.login && !actualUser.friends.includes(user.login))

                return {
                    login,
                    famille
                }
        }))

        res.send(newusers);
    })

}