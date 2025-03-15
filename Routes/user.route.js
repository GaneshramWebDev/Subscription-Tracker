import { Router } from "express";
import { getAllUsers, getUser } from "../Controllers/user.controllers.js";
import authorization from "../Middlewares/auth.middleware.js";


const userRouter = Router();

userRouter.get("/", getAllUsers);

userRouter.get("/:id",authorization, getUser);

userRouter.post("/", (req, res) => 
  res.send({ body: { title: "CREATE new user" } })
);

userRouter.put("/:id", (req, res) => 
  res.send({ body: { title: "UPDATE user" } })
);

userRouter.delete("/:id", (req, res) => 
  res.send({ body: { title: "DELETE user" } })
);

export default userRouter;
