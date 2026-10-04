import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'food-delivery-platform',
        });
        console.log('MongoDB Connected');
    }
    catch (error) {
        console.log(error);
    }
};
export default connectDB;
