import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'div[appRow]',
})
export class RowDirective {
  @HostBinding('class.row') rowClass: boolean = true;
}
