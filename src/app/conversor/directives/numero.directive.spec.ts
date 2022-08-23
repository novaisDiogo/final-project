import { NumeroDirective } from './numero.directive';
import { Directive, HostListener, ElementRef } from '@angular/core';

describe('NumeroDirective', () => {
  it('should create an instance', () => {
    let el: ElementRef;
    const directive = new NumeroDirective(el);
    expect(directive).toBeTruthy();
  });
});
