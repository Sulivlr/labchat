import express from 'express';
import {MessageMutation} from '../types';
import fileDb from '../fileDb';

const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
  const queryDate = req.query.datetime as string | undefined;
  let date: Date | null = null;

  if (queryDate) {
    date = new Date(queryDate);
    if (isNaN(date.getDate())) {
      res.status(400).send({error: 'Invalid Date'});
    }
  }
  let messages = await fileDb.getItems();
  if (queryDate) {
    messages = messages.filter(message => {
      return message.datetime > queryDate;
    })
  }
  res.send(messages.slice(-30));
});

messagesRouter.post('/', async (req, res) => {
  if (!req.body.author || !req.body.message) {
    res.status(400).send({error: 'Author and message must be present in the request'});
  }
  const messageMutation: MessageMutation = {
    author: req.body.author,
    message: req.body.message,
  };
  const message = await fileDb.addItem(messageMutation);
  res.send(message);
});

export default messagesRouter;