import { Router, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import express from 'express';

import UserRoutes from './Users/users.controller';
import RolesRoutes from './Roles/roles.controller';

dotenv.config()

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use('/roles', RolesRoutes);
app.use('/user', UserRoutes);

app.use(route)

app.listen(process.env.PORT ?? 3000, () => `server running on port ${process.env.PORT ?? 3000}`)