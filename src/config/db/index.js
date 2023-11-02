import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/mohinhanime");
    console.log("Connected");
  } catch (error) {
    console.log("Connected false");
  }
}

// module.exports = { connect };
export default connect;
