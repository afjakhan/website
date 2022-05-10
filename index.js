import express from "express";
import req from "express/lib/request";
import res from "express/lib/response";

const app = express();
const port = 9000;

app.listen (9000, () => {
    console.log(`starting server 0n port${port}`)
});
app.use("/",(req,res)=>{
    res.json({message:"hello from Express app"})
});