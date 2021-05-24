const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({
    login_api: {
        "url": { type: String, required: true },
        "method": { type: String, required: true },
        "headers": [
            {
                key: { type: String, required: true },
                value: { type: String, required: true },
            }
        ]
    },
})

const Config = mongoose.model("Configuration", configSchema, "Configurations");

module.exports = Config;