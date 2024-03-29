import { MongoClient } from "mongodb";

export async function connectDatabase() {
  //connect to client server
  const client = await MongoClient.connect(
    "mongodb+srv://dbDavid:dMfjJ0cXrwpOlJEO@atlascluster.kjefvkf.mongodb.net/events?retryWrites=true&w=majority"
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  //get access to db
  const db = client.db();

  //insert document (query) to email collection
  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  //add     { eventId: eventId } to filter for eventId or any other filter

  return documents;
}
