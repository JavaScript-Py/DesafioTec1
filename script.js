class Script {
 
  constructor() {
    // Referência aos elementos do DOM
    this.button = document.getElementById('send-btn');
    this.result = document.getElementById('result');
    this.number = document.getElementById('number');
    this.init();
  }

  /**
   * Inicializa o EventListener, para o evento click do botão.
   */
  init() {
    this.button.addEventListener('click', () => {
      if(this.number.value <= 0) {
        alert('Digite um número maior que 0');
        return;
      }
      this.calc(Math.floor(this.number.value) - 1);
    });
  }

  /**
   * Calcula a soma dos números inteiros divisíveis por 3 ou 5 inferiores ao número determinado e 
   * exibe o resultado no DOM.
   * @param {number} number - O número a ser calculado.
   */
  calc(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    this.result.innerHTML = sum;
  }
}

// Inicia a classe
const script = new Script();
