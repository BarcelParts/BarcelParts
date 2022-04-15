import express from "express"
import cors from "cors";
import routes from "./api/routes"


require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/v1/routes" , routes);
app.use("*", (req,res)=> res.status(404).json({error:"not found"}));

export default app