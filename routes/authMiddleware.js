

    const jwt = require('jsonwebtoken');
function authMiddleware(req, res, next) {


    var token = req.headers["x-access-token"];
    if (!token)
      return res.status(401).send({
        auth: false,
        message: "No token provided."
      });
    jwt.verify(token, "mytestserver", (err, decoded) => {
      if (err)
        return res.status(500).send({
          auth: false,
          message: "Failed to authenticate token."
        });
      req.user = decoded;
  

      
      
    });
    next();
  }

  module.exports=authMiddleware;