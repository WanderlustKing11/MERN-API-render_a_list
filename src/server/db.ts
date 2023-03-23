// import MongoClient from 'mongodb';
import { MONGODB_URI, DATABASE_NAME } from './config';

const mongoose = require('mongoose');

// connecting to local database via MongoDB/Mongoose

let connectedClient;

export const connectClient = async () => {
    if (connectedClient) {
        return connectedClient.db(DATABASE_NAME);
    }

    await mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, dbName: DATABASE_NAME});
    // ping
    await mongoose.connection.db(DATABASE_NAME).command({ ping: 1 });
    console.info("Connected to MongoDB!");

    connectedClient = mongoose.connection;

    return connectedClient.db(DATABASE_NAME);
}

export const stopClient = async () => {
    await connectedClient?.close();
}



