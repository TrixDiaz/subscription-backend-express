import {Router} from "express";
import {getUser, getUsers} from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

// Fetch all users
userRouter.get("/", getUsers);

// Fetch a single user by ID
userRouter.get("/:id", authorize, getUser);

// Create a new user
userRouter.post("/", (req, res) => {
  res.send("Store User");
});

// Update an existing user by ID
userRouter.put("/:id", (req, res) => {
  res.send("Update single User with ID: " + req.params.id);
});

// Delete a user by ID
userRouter.delete("/:id", (req, res) => {
  res.send("Destroy single User with ID: " + req.params.id);
});

export default userRouter;
