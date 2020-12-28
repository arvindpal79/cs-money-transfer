import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";
import { CurrencyPipe } from "@angular/common";

@Directive({
  selector: "[currencyFormatter]",
})
export class CurrencyFormatterDirective implements OnInit {
  private element: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: CurrencyPipe
  ) {
    this.element = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.element.value = this.currencyPipe.transform(this.element.value);
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    const parsedValue = value.replace(/[^0-9\.]/g, '').replace(/\.00$/, '');
    this.element.value = parsedValue != 0 ? parsedValue : '';
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    value = value.replace(/[.](?=.*[.])/g, '').replace(/[^0-9\.]/g, '');
    this.element.value = this.currencyPipe.transform(value);
  }

  @HostListener("keyup", ["$event.target.value"])
  onKeyup(value) {
    value = value.replace(/[.](?=.*[.])/g, '');
    this.element.value = value.replace(/[^0-9\.]/g, '');
  }
}
