const deUtil = require("../../utils/cryptoUtil");

const deCrypt = (req, res) => {
  res.send(deUtil.dycryptText(req.query.text));
};

module.exports = deCrypt;
