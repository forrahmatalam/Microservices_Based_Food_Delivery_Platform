import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/Db';
import './routes/auth';
dotenv.config();
const app = express();
app.use("/api/auth", authRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Auth Service is running on port ${PORT}`);
    connectDb();
});
