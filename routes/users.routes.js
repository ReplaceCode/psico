"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
const users = [];
usersRoutes.post("/user", (request, response) => {
    const { email, password } = request.body;
    users.push({
        email,
        password
    });
    return response.status(201).send();
});
usersRoutes.get("/users", (request, response) => {
    return response.json(users);
});
