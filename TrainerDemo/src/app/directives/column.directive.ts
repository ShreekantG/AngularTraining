import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: 'div[appColumn]',
})
export class ColumnDirective implements OnChanges {
  @Input() appColumn: number = 12;
  constructor(private eRef: ElementRef) {
    // this.addClass();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.appColumn && changes.appColumn.currentValue) {
      this.addClass();
    }
  }

  addClass() {
    const ele = this.eRef.nativeElement as HTMLDivElement;
    ele.classList.add(`col-md-${this.appColumn}`);
  }
}
