const express = require("express");

const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
    return res.json("Servidor rodando!")
});

app.listen(3000, () => console.log("Server up in 3000"));