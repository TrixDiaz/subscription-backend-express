import {Router} from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getAllSubscriptions,
  getSubscriptionById,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

// Fetch all subscriptions
subscriptionRouter.get("/", getAllSubscriptions);

// Fetch a single subscriptions by ID
subscriptionRouter.get("/:id", getSubscriptionById);

// Create a new subscriptions
subscriptionRouter.post("/", authorize, createSubscription);

// Update an existing subscriptions by ID
subscriptionRouter.put("/:id", (req, res) => {
  res.send("Update single subscriptions with ID: " + req.params.id);
});

// Delete a subscriptions by ID
subscriptionRouter.delete("/:id", (req, res) => {
  res.send("Destroy single subscriptions with ID: " + req.params.id);
});

// Fetch all subscriptions for a user
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

// Cancel a subscription by ID
subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send("Cancel Subscription");
});

// Fetch all upcoming renewals
subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send("Get all Upcoming Renewals");
});

export default subscriptionRouter;
