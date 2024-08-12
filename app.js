import express from "express";
import { dbConnetion } from "./db/dbConnection.js";
import userRoutes from "./src/modules/users/user.routes.js";
import sendEmail from "./src/email/email.js";
import AppError from "./src/utility/appError.js";
import cors from "cors";
const app = express();
const port = 4000;
app.use(express.json());
// db connection
dbConnetion;

//connect with front
app.use(cors());

// userRoutes
app.use(userRoutes);

app.use((err, req, res, next) => {
  res.status(err.statusCode).json({ message: err.message });
});

// handle invalid url
app.use("*", (req, res, next) => {
  next(new AppError("invalid URL", 404));
});

app.listen(port, () => console.log(`server running on port: ${port}`));
