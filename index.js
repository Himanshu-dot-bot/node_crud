import express from "express";
import db from "./db.js";
import personRoute from "./routes/personRoute.js";
import menuItemRoute from "./routes/menuItemRoute.js";
import bodyparser from "body-parser";

const app = express();
app.use(bodyparser.json()); 
app.get('/', (req, res) => {
  res.send("hello world");
});


app.use('/person',personRoute)
app.use('/menu',menuItemRoute)




app.listen(3000, () => {
  console.log("server is running on port 3000");
});