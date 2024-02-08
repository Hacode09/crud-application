// server setup
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

// initilizing app
const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(() => {
    console.log("DB connected sucessfully");
    app.listen(PORT, () => {
        console.log(`server is running on port: ${PORT}`);
    })

}).catch(error => console.log(error));


app.use("/api", route);