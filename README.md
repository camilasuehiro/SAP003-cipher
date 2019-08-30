# Diário de Abstinência

## Índice

* [1. Introdução](#1-introdução)
* [2. Definição do produto, objetivo e usuários](#2-definição-do-produto-objetivo-usuários)
* [3. Processo e decisões](#3-processo-e-decisões)
* [4. Manual de instruções para usuários](#4-manual-de-instruções-para-usuários)
  
## 1. Introdução

O tabagismo é um problema de saúde pública e uma das principais causas de morte evitável. De acordo com a Organização Mundial da Saúde ([OMS](https://www.who.int/tobacco/economics/background/en/)), o tabagismo mata mais de 7 milhões de pessoas no mundo anualmente, além de sobrecarregar a economia global com cerca de US$ 1,4 trilhão em custos com saúde e perda de produtividade a cada ano.

Segundo o Instituto Nacional do Câncer ([INCA](https://www.inca.gov.br/programa-nacional-de-controle-do-tabagismo/tratamento)), a intervenção recomendada para o tabagista é a abordagem cognitivo comportamental, cujo objetivo é o aprendizado de um novo comportamento, associando intervenções cognitivas e treinamento de habilidades comportamentais. 

Um indivíduo só é considerado ex-tabagista após o período de um ano sem fumar. Devido às dependências química, social e emocional, é comum a presença de sintomas físicos e psicológicos nos primeiros dias sem cigarro, que caracterizam a [síndrome de abstinência](https://www.inca.gov.br/programa-nacional-de-controle-do-tabagismo/tratamento). Dessa forma, são necessárias ferramentas para auxiliar as pessoas a não terem recaídas durante o processo de cessação do tabagismo. 

## 2. Definição do produto, objetivo e usuários 

Foi criado um produto denominado "Diário de Abstinência", cujo objetivo é auxiliar usuários em processo de cessação do tabagismo. O produto será utilizado como um diário, que permite ao usuário escrever mensagens relatando suas emoções durante o período de cessação, que serão criptografadas através de uma Cifra de César. Dessa forma, o usuário poderá ter um registro diário do processo de cessação sem se expor. A identificação de situações em que a síndrome de abstinência está presente é importante para a mudança comportamental e evitar recaídas.

## 3. Processo e decisões

A ferramenta criada é uma aplicação web em que o usuário consegue interagir com o produto através do navegador. Com essa ferramenta o usuário poderá cifrar e decifrar um texto indicando uma chave de deslocamento (_offset_). Para isso, foi utilizada a cifra de César, uma das técnicas mais simples de codificar uma mensagem, em que cada letra do texto original é substituída por outra que se encontra a um número fixo de posições (deslocamento) mais a frente do mesmo alfabeto (cifra por substituição).

O produto apresenta os seguintes arquivos:
* `src/index.html`: Contém a marcação HTML e chama o CSS e JavaScript necessários.
* `src/cipher.js`: Neste arquivo o objeto cipher foi implementado e exportado no objeto global (window). O cipher contém dois métodos:
  - `cipher.encode(string, offset)`: string é a mensagem (texto) a ser cifrada e offset é o número de posições que queremos mover para a direita no alfabeto. 
  - `cipher.decode(string, offset)`: string é a mensagem (texto) a ser decifrada e offset é o número de posições que queremos mover para a esquerda no alfabeto. 
* `src/index.js`: Neste arquivo os eventos de DOM são escutados e cipher.encode() e cipher.decode() são chamados.
* `test/cipher.spec.js`: Este arquivo contém alguns testes de exemplo e os testes para cipher.encode() e cipher.decode() foram implementados.

A interface permite ao usuário:
* Eleger um _offset_ indicando quantas posições de deslocamento de caracteres quer que a cifra utilize.
* Inserir uma mensagem (texto) para ser cifrada.
* Ver o resultado da mensagem cifrada.
* Inserir uma mensagem (texto) para ser decifrada.
* Ver o resultado da mensagem decifrada.

## 4. Manual de instruções para usuários

* Inserir diariamente uma mensagem na primeira caixa de texto, relatando como se sente, quais são as dificuldades que está tendo, em que momentos sente vontade de fumar, quais sintomas está apresentando etc.
* Inserir na segunda caixa de texto (Dias em abstinência) o número de dias que está sem fumar. Este número deverá ser sempre um valor positivo.
* Clicar no botão "Registrar".
* Salvar a mensagem que aparecerá cifrada em algum local externo (documento Word, bloco de notas ou onde preferir), incluindo o número que aparece entre os ":".
* Quando for inserido um número múltiplo de 26 (26, 52, 78, 104, ...) a mensagem não será cifrada. Nesses dias será realizada uma retrospectiva.
* No dia de retrospectiva, o usuário irá inserir a mensagem cifrada na terceira caixa de texto (Retrospectiva).
* Inserir na quarta caixa de texto (Dia) o número que aparece no início da mensagem cifrada.
* Clicar no botão "Relembrar" para ver a mensagem decifrada.