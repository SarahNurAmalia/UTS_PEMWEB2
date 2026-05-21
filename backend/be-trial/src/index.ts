import express from "express";
import cors from "cors";

import categoryRoute from "./routes/categoryRoute.js"
import speakerRoute from "./routes/speakerRoute.js"
import eventRoute from "./routes/eventRoute.js"

const app = express();


// MIDDLEWARE
app.use(cors());

app.use(express.json());


// ROUTES
app.use("/category", categoryRoute);

app.use("/speaker", speakerRoute);

app.use("/events", eventRoute);


// TEST API
app.get("/", (req, res) => {

    res.send("API Running...");
});


// SERVER
app.listen(3000, () => {

    console.log("Server running on port 3000");
});