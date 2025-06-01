import {Router} from "express";

const userRouter = Router();

// Fetch all users
userRouter.get("/", (req, res) => {
  res.send("Get all Users");
});

// Fetch a single user by ID
userRouter.get("/:id", (req, res) => {
  res.send("Get single User with ID: " + req.params.id);
});

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
