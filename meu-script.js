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

// 070.987.720-03 -> o ultimo numero tem que ser 3, pois corresponde ao digito do cpf

// Aqui inicia o processo de "registro" do cpf
const cpfRegistered = (cpf) => {
  const cpfLimpo = cpf.replace(/\D+/g, "");
  const cpfArray = Array.from(cpfLimpo);

  if (cpfLimpo.length !== 11) return console.log("Cheque o CPF e tente novamente!");

  // Inicia o processo de analise do CPF
  const analyzingCpf = () => {
    let count1 = cpfArray.slice(0, -2).length + 1;
    // 1º digito do CPF
    const firstDigit = cpfArray
      .slice(0, -2)
      .reduce((acumulator, value) => {
        const resulte = count1 * Number(value);
        count1--;
        acumulator.push(resulte);
        return acumulator;
      }, [])
      .join("+");

    let count2 = cpfArray.slice(0, -1).length + 1;
    // 2º e último digito do CPF
    const lastDigit = cpfArray
      .slice(0, -1)
      .reduce((acumulator, value) => {
        const resulte = count2 * Number(value);
        count2--;
        acumulator.push(resulte);
        return acumulator;
      }, [])
      .join("+");

    // Aqui faz a validação e uni os 2 dígitos
    const digitOfCpf = () => {
      // Cálculos
      const restOfNumberOfCPF1 = 11 - (eval(firstDigit) % 11);
      const restOfNumberOfCPF2 = 11 - (eval(lastDigit) % 11);
      // Regra para caso passe de 9 os dígitos
      const ruleOfRestOfNumberOfCPF1 = restOfNumberOfCPF1 > 9 ? 0 : restOfNumberOfCPF1;
      const ruleOfRestOfNumberOfCPF2 = restOfNumberOfCPF2 > 9 ? 0 : restOfNumberOfCPF2;
      const resulte = String(ruleOfRestOfNumberOfCPF1) + String(ruleOfRestOfNumberOfCPF2);
      console.log('O último dígito do CPF é:',resulte)
      return resulte;
    };

    // Aqui definirá se o CPF é falso ou não
    const answer = () => {
      if (cpfLimpo === cpfLimpo.slice(0, -2) + digitOfCpf()) {
        return console.log("CPF válido");
      } else {
        return console.log("CPF inválido");
      }
    };
    return answer();
  };
  analyzingCpf();
};
cpfRegistered("070.987.720-03");
