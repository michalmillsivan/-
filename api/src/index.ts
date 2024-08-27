import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { accountRouter } from './account';
import cors from "cors"

const app = express();
const PORT = 3456;

app.use(cors())
app.use(bodyParser.json())
app.use("/account", accountRouter)  

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });