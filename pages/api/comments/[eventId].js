import { MongoClient } from "mongodb";

async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://dbDavid:dMfjJ0cXrwpOlJEO@atlascluster.kjefvkf.mongodb.net/events?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    //get inputs
    const { email, name, text } = req.body;

    //validate inputs (basic)
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input." });
      return;
    }

    //response

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();

    const result = await db.collection("comments").insertOne(newComment);

    console.log(result);

    newComment.id = result.insertedId;

    res.status(201).json({
      message: "Comment submitted successfully.",
      comment: newComment,
    });
  }

  if (req.method === "GET") {
    const dummyList = [
      {
        id: "c1",
        name: "Max",
        text: "First comment",
      },
      {
        id: "c2",
        name: "Manuel",
        text: "Second comment",
      },
    ];

    res.status(200).json({ comments: dummyList });
  }

  client.close();
}

export default handler;
