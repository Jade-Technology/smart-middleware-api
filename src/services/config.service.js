const Config = require("../models/config.model");

const ConfigService = {
    login_api: () => Config.findOne({})
}

module.exports = ConfigService;