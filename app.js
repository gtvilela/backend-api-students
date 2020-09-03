import mongoose from 'mongoose';
import express from 'express';
import { studentRouter } from './routes/studentRouter.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('dotenv').config();

//Conexão MongoDB
conexaoMongo();

async function conexaoMongo() {
  console.log(process.env.USERDB);
  console.log(process.env.PWDDB);
  console.log(process.env.PORT);
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@bootcampfullstack.5rvru.mongodb.net/bootcamp?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Conectado no MongoDB com sucesso!');
  } catch (error) {
    console.log('Erro ao conectar ao MongoDB' + error);
  }
}

//API
const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => console.log('API Iniciada'));
