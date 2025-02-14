import express from "express";

const app = express();

app.get("/profile/:username", (req, res) => {
  // const username = req.params.username;
  // console.log(username);
  //* or
  //destructuring
  const { username } = req.params;
  console.log(username);
  res.send("Profile page for " + req.params.username);
});

app.get("/profile/:username/article/:slug", (req, res) => {
  console.log(req.params);
  res.send(
    `<h1>Article ${req.params.username} by ${req.params.slug.replace(
      /-/g,
      " "
    )}</h1>`
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
