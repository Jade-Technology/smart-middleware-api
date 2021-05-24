const fs = require('fs');
const { generateKeyPair } = require('crypto');

const keysPath = './keys';
const privateKeyPath = `${keysPath}/private.key`;
const publicKeyPath = `${keysPath}/public.key`;
const passphrase = process.env.PASSPHRASE

const KeyGenService = {

    privateKey: fs.readFileSync(privateKeyPath, 'utf-8'),
    publicKey: fs.readFileSync(publicKeyPath, 'utf-8'),
    passphrase: passphrase,

    createIfNotExists: async () => {
        let privateKeyExists = fs.existsSync(privateKeyPath);
        let publicKeyExists = fs.existsSync(publicKeyPath);

        if (!privateKeyExists || !publicKeyExists) {
            let keys = await KeyGenService.generateKey();
            if (!fs.existsSync(keysPath)) { fs.mkdirSync(keysPath); }
            fs.writeFileSync(privateKeyPath, keys.privateKey, 'utf8');
            fs.writeFileSync(publicKeyPath, keys.publicKey, 'utf8');
        }
    },

    generateKey: () => {
        let { err, publicKey, privateKey } = generateKeyPair('rsa', {
            modulusLength: 4096,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
                cipher: 'aes-256-cbc',
                passphrase: passphrase
            }
        });

        if (err) { return err; }
        else { return { publicKey, privateKey }; }
    }
}

module.exports = KeyGenService;