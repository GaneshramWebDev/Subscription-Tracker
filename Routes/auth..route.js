import { Router } from "express";
import { signin, signup, signout } from "../Controllers/auth.controllers.js";

const authRouter = Router();

authRouter.post("/sign-up", signup);

authRouter.post("/sign-in", signin);

authRouter.post("/sign-out", signout);

export default authRouter;
