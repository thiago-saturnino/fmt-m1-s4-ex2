console.log("hello");

class Conta {
  saldo;
  #senha;
  constructor(saldo, senha) {
    this.saldo = saldo;
    this.#senha = senha;
  }

  get senha() {
    return this.#senha;
  }

  set senha(novaSenha) {
    this.#senha = novaSenha;
  }

  avaliaSenha() {
    let senhaInformada = prompt("Digite sua senha:");
    if (senhaInformada == this.#senha) {
      alert("validou");
      return true;
    } else {
      alert("senha Incorreta , tente novamente!");
    }
  }

  deposito() {
    let valorDeposito = parseInt(prompt("Informe o valor do depósito:"));
    if (this.avaliaSenha) {
      this.saldo += valorDeposito;
      alert(
        `depósito de ${valorDeposito} efetuado, seu novo saldo é de ${this.saldo}`
      );
    }
  }

  retirada() {
    let valorRetirada = parseInt(prompt("Informe o valor da retirada:"));
    if (this.avaliaSenha) {
      if (this.saldo >= valorRetirada) {
        this.saldo = this.saldo - valorRetirada;
        alert(
          `saque efetuado no valor de: ${valorRetirada} , seu saldo é de: ${this.saldo}`
        );
      } else {
        alert(`saldo insuficiente , seu saldo é de :${this.saldo}`);
      }
    }
  }
}

const contaCorrente = new Conta(0, "1234");
contaCorrente.avaliaSenha();
contaCorrente.deposito(500);
contaCorrente.retirada(100);
