import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
import authRouter from "./routes/auth.route.js";
import contactRouter from "./routes/contact.route.js";
import { connectDB } from "./utils/db.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import cors from "cors";

// connectDB();
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));

// middleware
app.use(errorMiddleware);
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/contact", contactRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
