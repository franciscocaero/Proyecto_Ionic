import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  resultado: string = '';

  nuevoNumero(num: number) {
    this.resultado += num.toString();
  }

  nuevaOperacion(op: string) {
    // Evita agregar múltiples operadores consecutivos
    const lastChar = this.resultado[this.resultado.length - 1];
    if (!['+', '-', '*', '/'].includes(lastChar)) {
      this.resultado += op;
    }
  }

  calcularResultado() {
    try {
      // Evalúa la expresión de manera segura
      this.resultado = eval(this.resultado).toString();
    } catch (error) {
      this.resultado = 'Error';
    }
  }

  borrar() {
    this.resultado = '';
  }

}
