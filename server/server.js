const express = require("express");
const path = require("path");
const app = express();
const wordsListRouter = require("./routes/words-list");
const rankRouter = require("./routes/rank");
const cors = require("cors");

//----------------------------Middlewares----------------------------------------------------
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
//-----Main  wordslist EndPoint and redirect to the wordsListRouter------------------

app.use("/api/wordslist", wordsListRouter);

//-----Main rank EndPoint and redirect to the rankRouter------------------
app.use("/api/rank", rankRouter);

//-------------------------------Server Port and Setup-------------------------------------------------
let port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//--------------------------------------------------------------------------------
