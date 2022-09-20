import Express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userModdel from "./Schema.js";
const app = Express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/tutorials", (err) => {
  if (err) {
    console.log(`error while connecting to db ${err.message}`);
  }
  console.log("DB connected");
});

app.get("/", (req, res) => {
  userModdel.find((err, data) => {
    if (err) {
      console.log("something wrong ", err.message);
    }
    res.send(data);
  });
});

app.post("/create", (req, res) => {
  const { username, password } = req.body;
  const newUser = new userModdel({
    username,
    password,
  });
  newUser.save((err, data) => {
    if (err) {
      console.log("something wrong ", err.message);
    }
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
