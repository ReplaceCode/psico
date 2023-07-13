"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const app = (0, express_1.default)();
const customers = [];
app.use(express_1.default.json());
app.post("/account", (request, response) => {
    const { cpf, name } = request.body;
    const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf);
    if (customerAlreadyExists) {
        return response.status(400).json({
            erro: "Customer Already exists"
        });
    }
    customers.push({
        id: (0, uuid_1.v4)(),
        cpf,
        name,
        statement: []
    });
    return response.status(201).send();
});
app.get("/customers", (request, response) => {
    return response.send(customers);
});
app.listen(3333);
