import dotenv from "dotenv";

dotenv.config();

const config = {
  jwtSecret: process.env.JWT_SECRET || "",
  mongodbUrl: process.env.MONGODB_URL || "",
  port: process.env.PORT || "",
};

export default config;
