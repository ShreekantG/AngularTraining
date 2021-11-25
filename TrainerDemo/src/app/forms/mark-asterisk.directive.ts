import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[required]',
})
export class MarkAsteriskDirective {
  constructor(private eRef: ElementRef, private renderer: Renderer2) {
    this.addAsterisk();
  }

  addAsterisk() {
    const parent = this.renderer.parentNode(this.eRef.nativeElement);
    if (parent.getElementsByTagName('LABEL').length > 0) {
      parent.getElementsByTagName(
        'LABEL'
      )[0].innerHTML += `<span class="text-danger">*</span>`;
    }
  }
}
