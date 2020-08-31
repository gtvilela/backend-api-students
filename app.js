import mongoose from 'mongoose';
import express from 'express';
import { studentRouter } from './routes/studentRouter.js';

//Conexão MongoDB
conexaoMongo();

async function conexaoMongo() {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:gt651200@bootcampfullstack.5rvru.mongodb.net/bootcamp?retryWrites=true&w=majority',
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

app.listen(3000, () => console.log('API Iniciada'));
