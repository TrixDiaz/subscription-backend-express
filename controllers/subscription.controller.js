import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required. User not found in request.",
      });
    }

    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id, // Assuming req.user is populated by an authentication middleware
    });

    res.status(201).json({
      success: true,
      message: "Subscription created successfully",
      data: subscription,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.find();

    if (!subscriptions || subscriptions.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No subscriptions found",
      });
    }

    res.status(200).json({
      success: true,
      message: "All subscriptions fetched successfully",
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};

export const getSubscriptionById = async (req, res, next) => {
  try {
    const subscription = await Subscription.findById(req.params.id);

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: "Subscription not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Subscription fetched successfully",
      data: subscription,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserSubcriptions = async (req, res, next) => {
  try {
    // Check if the use the same as the one in the token
    if (req.user.id !== req.params.id) {
      const error = new Error(
        "You are not authorized to view this user's subscriptions"
      );
      error.statusCode = 403; // Forbidden
      throw error;
    }

    const subscriptions = await Subscription.find({user: req.user.id});

    res.status(200).json({
      success: true,
      message: "User subscriptions fetched successfully",
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};
