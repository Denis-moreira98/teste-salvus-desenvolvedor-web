import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";

import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

// Middleware de tratamento de erros
app.use((err: Error, req: Request, res: Response, __next: NextFunction) => {
   if (err instanceof Error) {
      return res.status(400).json({
         error: err.message,
      });
   }
   return res.status(500).json({
      status: "error",
      message: "Internal server error",
   });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server Online on port ${port}`));
