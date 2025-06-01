import {Router} from "express";

const subscriptionRouter = Router();

// Fetch all subscriptions
subscriptionRouter.get("/", (req, res) => {
  res.send("Get all subscriptions");
});

// Fetch a single subscriptions by ID
subscriptionRouter.get("/:id", (req, res) => {
  res.send("Get single subscriptions with ID: " + req.params.id);
});

// Create a new subscriptions
subscriptionRouter.post("/", (req, res) => {
  res.send("Store subscriptions");
});

// Update an existing subscriptions by ID
subscriptionRouter.put("/:id", (req, res) => {
  res.send("Update single subscriptions with ID: " + req.params.id);
});

// Delete a subscriptions by ID
subscriptionRouter.delete("/:id", (req, res) => {
  res.send("Destroy single subscriptions with ID: " + req.params.id);
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send("Get all user subscriptions");
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send("Cancel Subscription");
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send("Get all Upcoming Renewals");
});

export default subscriptionRouter;
