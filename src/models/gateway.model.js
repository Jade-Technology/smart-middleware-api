const mongoose = require('mongoose');

const gatewaySchema = new mongoose.Schema({
    parentId: { type: mongoose.Types.ObjectId },
    url: { type: String, required: true },
    headers: [{
        key: { type: String, required: true },
        value: { type: String, required: true },
    }],
})