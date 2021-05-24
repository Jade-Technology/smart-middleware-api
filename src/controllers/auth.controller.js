const JwtService = require("../services/jwt.service");
const LoginService = require("../services/login.service");

const AuthController = {
    signIn: async (req, res, next) => {
        let user = await LoginService.login(req.body);
        let jwt = JwtService.signIn(user.id, user.roles || []);
        res.json({ authorization: `${jwt}` });
    },
    authenticationCheck: (req, res, next) => {
        let authorizationToken = req.headers['authorization'];
        let verification = JwtService.verify(authorizationToken);
        next();
    }
}

module.exports = AuthController;