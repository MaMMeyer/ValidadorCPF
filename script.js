function verificaCPF(cpf) {
  valido = false;
  let total = 0;

  for (i = 0; i < 9; i++) {
    total = total + ((10 - i) * cpf[i]);
  }

  let resto = total % 11;

  pDigito = 11 - resto;

  total = 0;

  for (i = 0; i < 10; i++) {
    total = total + ((11 - i) * cpf[i]);
  }

  resto = total % 11;

  sDigito = 11 - resto;

  valido = (String(cpf[9]) + String(cpf[10]) == String(pDigito) + String(sDigito));

  return valido;
}

$("#inputBt").click(
  function () {

    let cpfDigitado = document.getElementById("inputA").value;
    let nome = document.getElementById("nome").value;

    if (verificaCPF(cpfDigitado)) {

      document.getElementById("telacpf").append(nome, " Seu CPF é ");
      document.getElementById("telacpf").append('Valido ');
      //document.write(nome," Seu CPF é ")
      //document.write('Valido')
      /*console.log("Valido");*/
    } else {
      document.getElementById("telacpf").append(nome, " Seu CPF é ");
      document.getElementById("telacpf").append('Invalido ');
      //document.write(nome," Seu CPF é ")
      //document.write('Invalido')
      /*console.log("Invalido");*/
    }
  }
)
