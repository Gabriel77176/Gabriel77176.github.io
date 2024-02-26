
import express from 'express'
import { PORT, mongoDBUri } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors'
import soccerPlayerRoutes from './routes/routes.js';
    
const app = express()
app.use(cors())
app.use(express.json());
    
app.use(soccerPlayerRoutes);

// Mary Smith, JavaScript Developer
async function connectToMongoDB() {
    try {
        await mongoose.connect((mongoDBUri), { 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            dbName: 'db_soccer_players'
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