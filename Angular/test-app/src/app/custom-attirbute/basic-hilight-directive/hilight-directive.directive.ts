import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHilightDirective]'
})
export class HilightDirectiveDirective implements OnInit{

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
      this.elementRef.nativeElement.style.backgroundColor = 'crimson';
      this.elementRef.nativeElement.style.color = 'white';
      this.elementRef.nativeElement.style.fontSize = '18px';
  }

}
