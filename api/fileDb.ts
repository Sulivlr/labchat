import {promises as fs} from 'fs';
import {Message, MessageMutation} from './types';

const fileName = './db.json';
let data: Message[] = []

const fileDb = {
  async init() {
    try {
      const fileContents = await fs.readFile(fileName);
      data = JSON.parse(fileContents.toString());
    } catch (error) {
      data = [];
    }
  },
   async getItems() {
    return data;
  },
  async addItem(item: MessageMutation) {
    const id = crypto.randomUUID();
    const datetime = new Date().toISOString();
    const message = {id, ...item, datetime};
    data.push(message);
    await this.save();
    return message;
  },
  async save() {
    await fs.writeFile(fileName, JSON.stringify(data, null, 2));
  }
};

export default fileDb;