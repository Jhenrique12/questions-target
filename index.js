// 1 Questão:
function isFibonacci(num) {
  let a = 0, b = 1, next = 0
  while (next < num) {
      next = a + b
      a = b
      b = next
  }
  return next === num || num === 0
}

let num = 21
isFibonacci(num) ? console.log(`${num} pertence à Fibonacci`) : console.log(`${num} não pertence à sequência de Fibonacci`)
// // // // // // // // // // // // // // // // // // // // // // //  

// 2 Questão:
function countLetter(s) {
  let count = 0
  for (let i = 0; i < s.length; i++) {
      if (s[i] === 'a' || s[i] === 'A') {
          count++
      }
  }
  return count
}

let s = "Abacaxi"
let count = countA(s)
console.log(`A letra 'a' ou 'A' aparece ${count} vezes na string`)
// // // // // // // // // // // // // // // // // // // // // // // 

/*
3 Questão:

Código dado:
int INDICE = 12;
int SOMA = 0;
int K = 1;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

Resposta:
 SOMA vai acumular a soma de 2 até 12 -> SOMA = 2 + 3 + 4 + até + 12 = 77
*/
// // // // // // // // // // // // // // // // // // // // // // // 

/*
4 Questão:
Respostas:
a) 9 - sequência de números ímpares
b) 128 - multiplicação por 2
c) 49 - quadrados perfeitos
d) 100 - quadrados perfeitos de números pares
e) 13 - sequência de fibonacci 
f) 200 - todos os números começam com 'D'

*/

/*
5 Questão:
Eu iria ligar o primeiro interruptor e deixaria ligado por um tempo. Então, no segundo eu iria ligar e desligar bem rápido. Indo na sala das lâmpadas eu ia ver que a que ta ligada era do primeiro interruptor, a que ta apagada, mas meio quente ia ser do segundo. Ai a desligada seria do terceiro que não liguei.
*/
