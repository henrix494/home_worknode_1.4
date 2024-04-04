const joke = require("jester-jokes");

const sendJoke = (req, res) => {
  res.send(joke.getJoke()).status(200);
};

module.exports = sendJoke;
