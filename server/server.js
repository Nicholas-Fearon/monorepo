//import node modules
import express from "express";
import cors from "cors";

//setup server
const app = express();
app.use(cors());

app.get("/", (req,res) => {
    res.send("Hello world!");
});

app.listen(8080, function () {
    console.log('Server is running on port 8080');
});