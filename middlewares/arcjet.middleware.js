import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, {requested: 5}); // Adjust requested value based on your needs maximum is 15

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({
          success: false,
          message: "Rate limit exceeded. Please try again later.",
        });
      }

      if (decision.reason.isBot())
        return res.status(403).json({
          success: false,
          message: "Access denied Bot Detected",
        });

      res.status(403).json({
        success: false,
        message: "Arcjet Middleware Access Denied",
      });
    }

    next();
  } catch (error) {
    console.log(`Arcjet middleware error:, ${error.message}`);
    next(error);
  }
};

export default arcjetMiddleware;
