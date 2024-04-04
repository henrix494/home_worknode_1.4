const enUtil = require("../../utils/cryptoUtil");
const encrytText = (req, res) => {
  res.send(enUtil.encrypText(req.query.text));
};

module.exports = encrytText;
