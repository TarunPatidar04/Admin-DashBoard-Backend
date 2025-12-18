import { ZodError } from "zod";

export const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (error) {
    // console.log(error);

    // ✅ Zod v4 error handling
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map(issue => ({
        field: issue.path[0],
        message: issue.message
      }));

      return res.status(400).json({
        message: "Validation failed",
        errors: formattedErrors
      });
    }

    // ❌ unexpected error
    console.error("Unexpected error:", error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};
