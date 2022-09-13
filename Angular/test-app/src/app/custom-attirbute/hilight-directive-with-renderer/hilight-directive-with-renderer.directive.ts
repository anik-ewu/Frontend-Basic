import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHilightDirectiveWithRenderer]'
})
export class HilightDirectiveWithRendererDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'yellow');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }

}
