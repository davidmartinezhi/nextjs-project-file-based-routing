function handler(req, res) {
  const eventId = req.query.eventId;

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
      id: new Date().toISOString(),
      email: email,
      name: name,
      text: text,
    };

    console.log(newComment);
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
}

export default handler;
