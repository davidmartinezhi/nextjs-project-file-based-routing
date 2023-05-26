function handler(req, res) {
  if (req.method === "POST") {
    //get user email
    const userEmail = req.body.email;
    /*Always validate on api routes */
    //basic user email validation
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    console.log(userEmail);
    res.status(201).json({ message: "Signed Up" });
  }
}

export default handler;
