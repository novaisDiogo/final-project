import { ElementRef } from '@angular/core';
import { TarefaConcluidaDirective } from './tarefa-concluida.directive';

describe('TarefaConcluidaDirective', () => {
  let ez: ElementRef;
  it('should create an instance', () => {
    const directive = new TarefaConcluidaDirective(ez);
    expect(directive).toBeTruthy();
  });
});
