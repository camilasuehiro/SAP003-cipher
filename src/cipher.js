window.cipher = {
  encode: encode,
  decode: decode,
};
function encode(textForCipher, offset) { //offset=parametro
  let resultEncode = "";
  for (let i=0; i<textForCipher.length; i++) {
    if (textForCipher[i].charCodeAt() >=65 && textForCipher[i].charCodeAt() <=90) {
      resultEncode += String.fromCharCode((textForCipher[i].charCodeAt()-65 + offset) %26 +65);
    } //maiúscula
    else if (textForCipher[i].charCodeAt() >=97 && textForCipher[i].charCodeAt() <=122) {
      resultEncode += String.fromCharCode((textForCipher[i].charCodeAt()-97 + offset) %26 +97);
    } //minúscula
    else {
      resultEncode += String.fromCharCode((textForCipher[i].charCodeAt()));
    } //números e símbolos
  }
  return resultEncode; //imprime o resultado da função no index.js
}
function decode(textForDecipher, offset) { //offset=parametro
  let resultDecode = ""; 
  for (let i=0; i<textForDecipher.length; i++) {
    if (textForDecipher[i].charCodeAt() >=65 && textForDecipher[i].charCodeAt() <=90) {
      resultDecode += String.fromCharCode((textForDecipher[i].charCodeAt()-90 - offset) %26 +90);
    } //maiúscula
    else if (textForDecipher[i].charCodeAt() >=97 && textForDecipher[i].charCodeAt() <=122) {
      resultDecode += String.fromCharCode((textForDecipher[i].charCodeAt()-122 - offset) %26 +122);
    } //minúscula
    else {
      resultDecode += String.fromCharCode((textForDecipher[i].charCodeAt()));
    } //números e símbolos
  }
  return resultDecode;
}
//aqui você deve implementar o objeto cipher, 
//o qual deve estar exportado no objeto global (window). 
//Este objeto (cipher) deve conter dois métodos:
//cipher.encode(offset, string): 
//offset é o número de posições que queremos mover para a direita no alfabeto 
//e string é a mensagem (texto) que queremos cifrar.
//cipher.decode(offset, string): 
//offset é o número de posições que queremos mover para a esquerda no alfabeto 
//e string é a mensagem (texto) que queremos decifrar.