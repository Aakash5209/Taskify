import mongoose from 'mongoose';


const Connection = () => {

    const MONGODB_URI = 'mongodb://localhost:27017/todoDatabase'

    mongoose.connect(MONGODB_URI, { family:4});

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;