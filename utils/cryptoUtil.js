const crypto = require("crypto");
const algorithm = "aes256";
const key = "password";

const encrypText = (text) => {
  const cipher = crypto.createCipher(algorithm, key);

  const encryptedText =
    cipher.update(text, "utf-8", "hex") + cipher.final("hex");
  return encryptedText;
};
const dycryptText = (text) => {
  const decipher = crypto.createDecipher(algorithm, key);
  const deCrypt =
    decipher.update(text, "hex", "utf8") + decipher.final("utf-8");
  return deCrypt;
};
module.exports = {
  encrypText,
  dycryptText,
};
