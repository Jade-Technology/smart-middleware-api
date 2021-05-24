const jwtWebToken = require('jsonwebtoken');
const KeyGenService = require('./keygen.service');
var suid = require('rand-token').suid;

const JwtService = {

    signIn: (userId, roles) => {
        let jwt = jwtWebToken.sign({ id: suid(32), userId, roles },
            { key: KeyGenService.privateKey, passphrase: KeyGenService.passphrase },
            { algorithm: "RS256", expiresIn: "10m" });
        return jwt;
    },

    verify: (token) => {
        if (token != null) {
            return jwtWebToken.verify(token.replace("Bearer ", ""), KeyGenService.publicKey, { algorithms: "RS256" });
        }
        else {
            return undefined;
        }
    }

}

module.exports = JwtService;