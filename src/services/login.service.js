const axios = require('axios').default;
const { login_api } = require('../../config.json');

const LoginService = {

    login: async (data) => {
        let response = await axios({ url: login_api.url, method: login_api.method, data: data, headers: login_api.headers });
        return response.data;
    }

}

module.exports = LoginService;