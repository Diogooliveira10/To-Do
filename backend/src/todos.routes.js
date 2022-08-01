const express = require("express");

const allTodos = [{ name: "fulano", status: false }];
const todosRoutes = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

todosRoutes.post("/todos", async (req, res) => {
    const { name } = req.body;
    const todo = await prisma.todo.create({
        data: {
            name,
        },
    });

    return res.status(201).json(todo);
});

todosRoutes.get("/todos", (req, res) => {
    return res.status(200).json(allTodos);
});


module.exports = todosRoutes;