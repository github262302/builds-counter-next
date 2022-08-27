import { MongoClient } from "mongodb";
const url = "mongodb://1.15.63.144:10008";
const client = new MongoClient(url);

const dbName = "devbuilds";
const DB = client.db(dbName);

export { DB };
