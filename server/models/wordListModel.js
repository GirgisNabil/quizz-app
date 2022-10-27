const { error } = require("console");
const fs = require("fs");
const path = require("path");
//basic readfile function to fetch data from json file
const database = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "TestData.json"
);

let fetchWorldList = async () => {
  return new Promise((res, rej) => {
    fs.readFile(database, (err, result) => {
      if (err) {
        rej("error in fetching all students");
      } else {
        res(JSON.parse(result));
      }
    });
  });
};

module.exports = { fetchWorldList };
