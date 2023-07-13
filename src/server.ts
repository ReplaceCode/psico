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

	// app.get("/statement/:cpf", (request, response)=> {

	// 	const { cpf } = request.params;

	// 	const customer = customers.find((customer) => customer.cpf === cpf);
		
	// 	if(!customer){
	// 		response.status(400).json({
	// 			error:"Customer already not exists"
	// 		})
	// 	}
	// 	console.log(customer);
	// 	 //const statement = customer.statement
	// 	return response.json();
	// })
	
app.listen(3333)
