const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const PORT = 8080;
const db = require("./models/db");
const expenseRoutes = require("./routes/expense");

const app = express();
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(morgan("dev"));
app.use(cors());

app.use("/expenses", expenseRoutes);

app.use((req, res, next) => {
  const path = req.path;

  const error = new Error("Invalid URL");
  if (path === "/expense") {
    error.message = `Use /expenses instead of /expense`;
  }
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log("App is listening on port: ", PORT);
});
