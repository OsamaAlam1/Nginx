import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "myappdb",
    })
    .then(() => {
      console.log("✅ MongoDB Connected Successfully!");
    })
    .catch((err) => {
      console.log(`❌ MongoDB Connection Error: ${err}`);
      process.exit(1);
    });
};
