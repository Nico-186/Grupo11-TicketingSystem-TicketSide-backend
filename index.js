const express = require("express");
const app = express();
const cors = require("cors");


const allTickets = require("./routes/ticket");
const status = require("./routes/status");
const priority = require("./routes/priority");
const login = require("./routes/login");
const comments = require("./routes/comments");

const port = 3000;

app.use(express.json());

app.use("/tickets", allTickets);
app.use("/status/", status);
app.use("/priority/", priority);
app.use("/logindata/", login);
app.use("/comments/", comments);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.get('/',(req,res)=>res.json({message:'This work'}));
app.listen(process.env.PORT || port);