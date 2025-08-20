import express from "express";

const app = express();
const PORT = 5002;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/Global", (req,res) => {
    res.send("Welcome To Global Collage");
}); 

app.post("/register", (req, res) => {
    const userData = req.body; // { name, email, password, ... }
  
    console.log("📥 Incoming /register payload:", userData);
  
  });

app.listen( PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



