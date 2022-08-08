const mongoose = require('mongoose');
require('dotenv').config({path: './variables.env'});

const connectDataBase = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
    
}

module.exports = connectDataBase;