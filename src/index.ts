import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { AppDataSource } from "./dataSource";
import { AppError } from "./errors/appError";
import routes from "./routes";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(routes);

  app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          message: err.message,
        });
      }

      return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
      });
    }
  );

  return app.listen(process.env.APP_PORT);
});
