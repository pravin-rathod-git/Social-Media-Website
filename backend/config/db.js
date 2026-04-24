import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("✅ DB connected");
    } catch (error) {
        console.log("❌ DB ERROR:", error.message);
        process.exit(1); // stop app if DB fails
    }
};

export default connectDb;
