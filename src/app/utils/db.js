import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to db");
  } catch {
    throw new Error("Connection Failed");
  }
};

export default connect;
