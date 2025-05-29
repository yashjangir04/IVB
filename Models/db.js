const mongoose = require("mongoose");

const mongo_url = process.env.MONGO_CONN;

if (!mongo_url) {
  console.error("Missing MongoDB connection string in environment variable!");
  process.exit(1);
}

mongoose
  .connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DataBase Connected...");
  })
  .catch((err) => {
    console.error("DataBase Connection Error...", err);
  });
