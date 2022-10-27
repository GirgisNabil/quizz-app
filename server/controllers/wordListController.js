const wordsModel = require("../models/wordListModel");

//A function which uses wordmodel to fecth all we data from the json file
const getWordsList = async (req, res) => {
  const result = await wordsModel.fetchWorldList().then((data) => {
    return data;
  });

  //sorting the array in a random manner
  const shuffled = result.wordList.sort(() => 0.5 - Math.random());

  let base = [];
  let baseWords = ["verb", "noun", "adverb", "adjective"];

  /*looping over both basic 4 choices and the shuffled array
 to pick 1 from each syntactic functions (verb noun etc..)
 then push them in array called *base*
 */
  for (let i = 0; i < baseWords.length; i++) {
    for (let y = 0; y < shuffled.length; y++) {
      if (shuffled[y].pos == baseWords[i]) {
        baseWords.splice(i, 1);
        base.push(shuffled.splice(y, 1)[0]);
        (y = 0), (i = 0);
      }
    }
  }

  //now im getting the other random 6 words to complete the 10 words *(as needed)
  let selected = shuffled.slice(0, 6);

  //spreeding the base(4 basic verbs) and the 6 other words into one array called final
  const finalArray = [...base, ...selected].sort(() => 0.5 - Math.random());

  //sending back final array to the client
  res.json(finalArray);
};

module.exports = { getWordsList };
