import mongoose from 'mongoose'

const uri = "mongodb+srv://anikamalayappan:KetchupKutti*3@veggiefinder.ozzeudk.mongodb.net/?retryWrites=true&w=majority&appName=veggieFinder";

export const connectToMongoDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to Atlas');
        return true;
    } catch (err) {
        console.error('Failed to connect to Atlas:', err);
        return false;
    }
};

