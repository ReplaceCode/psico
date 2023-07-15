"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const uuid_1 = require("uuid");
const usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
const users = [];
usersRoutes.post("/", (request, response) => {
    const { email, password } = request.body;
    const user = {
        id: (0, uuid_1.v4)(),
        email,
        password
    };
    users.push(user);
    return response.status(201).send();
});
usersRoutes.get("/", (request, response) => {
    return response.json(users);
});
