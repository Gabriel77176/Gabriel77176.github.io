import express from 'express'
import { PORT, mongoDBUri } from './config.js';
import mongoose from 'mongoose';
    
const app = express()
                   
app.get('/', async (req, res) => {
    // Response sent to browser
    res.send('Hello Web Browser!')
})

async function connectToMongoDB() {
    try {
        await mongoose.connect((mongoDBUri), { 
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log('Express app connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Express app listening on port ${PORT}`)
        })            
    } catch (error) {
        console.error('Could not connect to MongoDB', error);
    }
}    

connectToMongoDB();