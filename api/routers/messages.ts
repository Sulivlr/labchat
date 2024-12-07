import express from "express";

const messagesRouter = express.Router();

messagesRouter.get("/", (req, res) => {
   res.send("Welcome to the messages");
});

messagesRouter.post("/", (req, res) => {
  res.send("Welcome to the messages again");
});

export default messagesRouter;