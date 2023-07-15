import { Router, request } from "express";

const usersRoutes = Router();

const users = [];

usersRoutes.post("/user", (request, response)=>{
  const { email, password } = request.body;

  users.push({
    email,
    password
  });

  return response.status(201).send();
})



usersRoutes.get("/users", (request, response)=>{
  
  return response.json(users);
})

export { usersRoutes};
