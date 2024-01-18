import express, { urlencoded } from "express";
import cors from "cors";
import "dotenv/config";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import { connectDB } from "./utills/features";

// mongoose.connect(process.env.MONGODB_CONECTION_STRING as string);

connectDB();


const app = express();
app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(cors());

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes);

app.listen(7000, () => {
    console.log("server in running on localhost:7000");
})