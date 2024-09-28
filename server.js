const app = require('./app');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

// MongoDB Database connection
const connectionString = process.env.MONGODB_CONNECTION_STRING
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("MONGODB connection successfull");
  });

// Starting the server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});