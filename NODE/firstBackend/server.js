import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./src/config/dataBase.js";
import AuthRouter from "./src/routers/myRouter.js"
const app = express();

app.use(express.json());
app.use("/auth",AuthRouter);

app.get("/", (req, res) => {
  console.log("server is running");
  res.json({ message: "server is running successfully" });
});

app.use((err,req,res,next)=>{
  const ErrorMessage =  err.message ||"Internal server error";
  const StatusCode=err.statusCode ||500;

  res.status(StatusCode).json({message:ErrorMessage});
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server started at port", port);
  connectDB();
});