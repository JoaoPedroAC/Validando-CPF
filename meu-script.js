// 705.484.450-52
/*

7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2 // quanto maior a quantidade de numeros acima, aumentará aqui baixo tbm
70  0   40  28  48  20  16  15  0 = 237

11 - (237 % 11) = 5 (último digito descoberto)
se o número digitado for maior que 9, consideraremos 0
assim monmtaremos parte por parte o cpf, como um quebra cabeça

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10 = 284
11 - (284 % 11) = 2 (último digito descoberto)
*/

// 070.987.720-03 -> o ultimo numero tem que ser 3, pois corresponde ao ultimo numero do cpf
const cpf = "070.987.720-0";
const cpfLimpo = cpf.replace(/\D+/g, "");
let cpfArray = Array.from(cpfLimpo);
let count = cpfLimpo.length + 1;

const cpfTratado = cpfArray
  .reduce((acumulator, value) => {
    let resulte = count * Number(value);
    count--;
    acumulator.push(resulte);
    return acumulator;
  }, [])
  .join("+");

const cpfDigit = () => {
  let restOfNumberOfCPF = 11 - (eval(cpfTratado) % 11);
  return restOfNumberOfCPF > 9 ? 0 : restOfNumberOfCPF;
};

console.log(cpfDigit());
