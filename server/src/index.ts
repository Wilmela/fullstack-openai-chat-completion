import express, { Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import complitRoute from "./routes/complit.routes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Ai route
app.use("/api/v1/", complitRoute);

//Home route
app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .send({ status: "success", message: "Hello, welcome to Complit!" });
});

app.listen(8080, () => console.log("Server running on port 8080"));
