import express from "express";

const app = express();
const PORT = 5002;

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/Register", (req,res) => {
    res.send("This is a registration page");
});

app.get("/Global", (req,res) => {
    res.send("Welcome To Global Collage");
}); 

app.listen( PORT, () => {
    console.log("Server is running on http://localhost:${PORT}");
});



