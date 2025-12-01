const express = require("express");
const cors = require("cors");
const app = express();
const { user } = require("./config");


app.use(cors());
app.use(express.json());


app.post("/api/login", (req, res) => {
const { username, password } = req.body;


if (username === user.username && password === user.password) {
return res.json({ message: "Login Successful" });
}


res.json({ message: "Invalid Username or Password" });
});


app.listen(5000, () => console.log("Server running on port 5000"));
