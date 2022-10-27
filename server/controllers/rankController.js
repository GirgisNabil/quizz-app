const RankModel = require("../models/RankModel");

/*A function which uses rankModel to fecth all we data
 from the json file and assign it to result varaible*/
const getRank = async (req, res) => {
  const result = await RankModel.fetchAllScores().then((data) => {
    return data;
  });

  //getting quizz score from  request body
  studentScore = req.body.score;

  /**checking if the score is  in the data or not
   * to prevent null isuess then inseting it if its not found  */
  if (!sorted.indexOf(studentScore)) {
    sorted.push(studentScore);
  }

  /*sorting the data by its integar value not (string)
   by passing a comparing function to sort method*/
  const sorted = result.scoresList.sort(function (a, b) {
    return a - b;
  });

  /*getting the position of the student score */
  let rank = sorted.indexOf(studentScore);
  /**calculating the Percentage of the Rank based on its position on the sorted array
   *  and the length of the array*/
  let rankInPercentage = (rank / sorted.length) * 100;

  /**Sending back the Rank percentage rounded to the nearest hundredth  */
  res.json(Math.round(rankInPercentage * 100) / 100);
};

module.exports = { getRank };
