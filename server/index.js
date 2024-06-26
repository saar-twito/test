import express from 'express';
import userRouter from './routes/user.js';
import cors from 'cors';

const app = express();
app.use(cors()) // enable all CORS requests

// moongose.connect(process.env.MONGODB_STRING)
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.log('Error:', error);
//   });

app.use(express.json());

app.use("/api/users", userRouter);

// http://localhost:3000/api/users

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});