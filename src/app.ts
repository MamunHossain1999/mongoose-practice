import express, { Request, Response } from 'express';  // Correctly importing Request and Response types
import cors from 'cors';

const app = express();

// Using CORS middleware
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
