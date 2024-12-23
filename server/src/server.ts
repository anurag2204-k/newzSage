console.log("Server file loaded.");

import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import user from "./routes/userRoute";
// import publisher from "./routes/publisherRoute";
import news from "./routes/newsRoute";
import comment from "./routes/commentRoute";
import vote from "./routes/voteRoute";
import connectDB from './db';
import allNews from "./routes/getallnews";
import auth from "./routes/auth";
import test from "./routes/test";
import { VercelRequest, VercelResponse } from "@vercel/node";
// import userInfoRoute from "./routes/userInfoRoute";
// import serverless from 'serverless-http';

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: '*', // Frontend URL (adjust accordingly)
  methods: ['GET', 'POST', 'PUT', 'DELETE','HEAD'], // Allow other methods as needed
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], // Allow additional headers if required
  credentials: true, // If you're using cookies or sessions
}));

connectDB().catch((error) => {
  console.error('Failed to connect to the database:', error);
  // Optionally, handle the error further if needed
});


// ** Global HEAD Middleware **
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.method === "HEAD") {
    res.status(200).end(); // Respond to HEAD requests without a body
  } else {
    next(); // Continue to other middleware/routes for non-HEAD requests
  }
});

app.get("/api",(req: Request, res: Response)=>{
  res.send("API is running...");
})

app.use("/api/v1/user", user);
app.use("/api/v1/details", auth);
// app.use("/api/v1/publisher", publisher);
app.use("/api/v1/all", allNews);
app.use("/api/v1/news", news);
app.use("/api/v1/comment", comment);
app.use("/api/v1/vote", vote);


// Start the server if this file is run directly
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

// Export the app for testing or other usage
export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};