import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHilightDirectiveWithRenderer]'
})
export class HilightDirectiveWithRendererDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor: string = 'green';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'yellow');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.backgroundColor = 'blue';
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'yellow');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.backgroundColor = 'red';
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'crimson');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

}
