import mongoose from 'mongoose';
import express from 'express';
import { studentRouter } from './routes/studentRouter.js';
require('dotenv').config();

//Conexão MongoDB
conexaoMongo();
const { USERDB, PWDDB, PORT } = process.env;

async function conexaoMongo() {
  try {
    await mongoose.connect(
      `mongodb+srv://${USERDB}:${PWDDB}0@bootcampfullstack.5rvru.mongodb.net/bootcamp?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Conectado no MongoDB com sucesso!');
  } catch (error) {
    console.log('Erro ao conectar ao MongoDB');
  }
}

//API
const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(PORT, () => console.log('API Iniciada'));
