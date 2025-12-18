import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import authRouter from './routes/auth.route.js';

app.use('/api/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});