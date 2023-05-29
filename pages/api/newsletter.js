import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    //get user email
    const userEmail = req.body.email;
    /*Always validate on api routes */
    //basic user email validation
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    //connect to client server
    const client = await MongoClient.connect(
      "mongodb+srv://dbDavid:dMfjJ0cXrwpOlJEO@atlascluster.kjefvkf.mongodb.net/events?retryWrites=true&w=majority"
    );

    //get access to db
    const db = client.db();

    //insert document (query) to email collection
    await db.collection("newsletter").insertOne({ email: userEmail });

    //disconnect from client sever
    client.close();

    res.status(201).json({ message: "Signed Up" });
  }
}

export default handler;
