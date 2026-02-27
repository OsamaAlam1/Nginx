// server.js
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

// ✅ Use dynamic import AFTER dotenv loads
const { default: app } = await import("./app.js");
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});