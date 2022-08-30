const express = require("express");
const cors = require("cors");
const todosRoutes = require("./todos.routes")

const app = express();

app.use(express.json());
app.use(cors);
app.use(todosRoutes);

app.get("/home", (req, res) => {
    return res.json("Servidor rodando!")
});

app.listen(3000, () => console.log("Server up in 3000"));