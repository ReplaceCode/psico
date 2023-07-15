import { Router, request } from "express";
import { v4 as uuidv4 } from "uuid";

const usersRoutes = Router();

const users = [];

usersRoutes.post("/", (request, response)=>{
  const { email, password } = request.body;

  const user = {
    id: uuidv4(),
    email,
    password
  }

  users.push(user);

  return response.status(201).send();
})



usersRoutes.get("/", (request, response)=>{
  
  return response.json(users);
})

export { usersRoutes};
