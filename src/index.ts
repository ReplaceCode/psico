import express from 'express';
import { usersRoutes } from './routes/users.routes';
import { v4 as uuidv4} from 'uuid';

	const app = express();	
	app.use(express.json());

	app.use("/user",usersRoutes);

  app.listen(3000, () => console.log("Server is running! "));
