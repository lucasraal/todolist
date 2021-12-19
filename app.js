import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

let items = [];

app.get("/", (req, res) => {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    // year: "numeric",
  };
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, items: items });
});

app.post("/", (req, res) => {
  let newListItem = req.body.newListItem;
  items.push(newListItem);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
