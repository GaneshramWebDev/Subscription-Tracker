import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./Routes/user.route.js";
import authRouter from "./Routes/auth..route.js";
import subscriptionRouter from "./Routes/Subscription.route.js";
import connectToDatabase from "./Database/mongodb.js";
import errormiddleware from "./Middlewares/error.midleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./Middlewares/arcjet.middleware.js";
import workflowRouter from "./Routes/workflow.route.js";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(arcjetMiddleware);

app.use("/api/v1/auth", authRouter);  
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/workflow", workflowRouter);
app.use(errormiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to the backend");
});

app.listen(PORT, async () => {
  console.log(`server is running baby on ${PORT}`);
  await connectToDatabase();
});

export default app;
