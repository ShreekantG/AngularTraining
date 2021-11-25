import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadowEffect]',
})
export class ShadowEffectDirective {
  @HostBinding('class.shadow') hasEffect: boolean = false;

  @HostListener('mouseover')
  addEffect() {
    this.hasEffect = true;
  }
  @HostListener('mouseout')
  removeEffect() {
    this.hasEffect = false;
  }
}
