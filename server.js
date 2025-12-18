import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import authRouter from './routes/auth.route.js';
import { connectDB } from './utils/db.js';

// connectDB();


// middleware
app.use(express.json());
app.use('/api/auth', authRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
)