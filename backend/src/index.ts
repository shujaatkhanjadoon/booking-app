import express, { Request, Response, urlencoded } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";

mongoose.connect(process.env.MONGODB_CONECTION_STRING as string);


const app = express();
app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(cors());


app.use("/api/users", userRoutes);

app.listen(7000, () => {
    console.log("server in running on localhost:7000");
})