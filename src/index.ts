import express from 'express';
import { v4 as uuidv4} from 'uuid';

	const app = express();
	const customers: { id: string; cpf: any; name: any; statement: []; }[] = [];
	

	app.use(express.json());

  app.post("/account", (request, response)=> {
		 
	const {cpf, name} = request.body;

	const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf);
		
		if(customerAlreadyExists){
			return response.status(400).json({
				erro:"Customer Already exists"
			})
		}

	customers.push({
			id: uuidv4(),
			cpf,
			name,
			statement:[]
		})

	  return response.status(201).send();
	});

	app.get("/customers", (request, response)=> {

		
		return response.send(customers);
	})
	
app.listen(3000)
