function encodeIndex() {
  event.preventDefault();
  let textForCipher=(document.getElementById("textForCipher").value);
  let offset=Number(document.getElementById("offset").value); //offset=variavel
  let resultEncode = document.getElementById("resultE"); //index.html
  let cifra = window.cipher.encode(textForCipher, offset); //cipher.js
  resultEncode.innerHTML=`<p>PARABÉNS! Você já está sem fumar há ${offset} dias! Seu texto foi criptografado, salve a mensagem a seguir: ${offset}: ${cifra}. Mesmo que seja difícil, continue se esforçando para alcançar seu objetivo!</p>`; //imprime o resultado
}
function decodeIndex() {
  event.preventDefault();
  let textForDecipher=(document.getElementById("textForDecipher").value);
  let offset=Number(document.getElementById("offset").value); //offset=variavel
  let resultDecode = document.getElementById("resultD"); //index.html
  let decifra = window.cipher.decode(textForDecipher, offset); //cipher.js
  resultDecode.innerHTML=`<p>Dia ${decifra}</p>`; //imprime o resultado
}
document.getElementById("btn-enviar1").addEventListener("click", encodeIndex);
document.getElementById("btn-enviar2").addEventListener("click", decodeIndex);
//aqui você deve escutar os eventos de DOM, 
//chamar cipher.encode() e cipher.decode().