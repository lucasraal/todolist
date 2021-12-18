import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let today = new Date();
  let currentDay = today.getDay(); // returns a number from 0 to 6, where 0 = sunday
  let day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      break;
  }

  res.render("list", { kindOfDay: day });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
