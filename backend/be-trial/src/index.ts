import express from "express";
import cors from "cors";

import categoryRoute from "./routes/categoryRoute.js"
import speakerRoute from "./routes/speakerRoute.js"
import eventRoute from "./routes/eventRoute.js"

const app = express();


// MIDDLEWARE
app.use(cors({
  origin: [
    "http://localhost:5173",                    // untuk dev lokal
    "https://uts-pemweb2-frontend.vercel.app"          // ← URL Vercel 
  ]
}));

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
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);
});