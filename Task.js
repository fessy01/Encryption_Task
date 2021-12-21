var encrypted = CryptoJS.AES.encrypt("Don't let them know", "Secret Passphrase");

console.log(encrypted);
console.log(encrypted.toString());

var decrypted = CryptoJS.AES.decrypt(encrypted.toString(), "Secret Passphrase");

console.log(decrypted);
console.log(decrypted.toString(CryptoJS.enc.Utf8));