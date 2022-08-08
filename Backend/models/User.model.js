const  mongoose  = require("mongoose");

const User = mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    document: {
        type: String,
        required: true,
    },
    cellphone: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model("User", User);
