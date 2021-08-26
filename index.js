const express=require("express");
const bodyParser=require ("body-parser");
const {init} = require ("./db");
const routes=require("./routes");

const app =express();
app.use(bodyParser.json());
app.use(router);

init().then(()=>{
    console.log("string server on port 4040");
    app.listen(4040);
})