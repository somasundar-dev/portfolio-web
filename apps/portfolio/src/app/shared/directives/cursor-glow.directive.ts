import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appCursorGlow]',
  standalone: true,
})
export class CursorGlowDirective {
  private readonly el = inject(ElementRef<HTMLElement>);

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    this.el.nativeElement.style.setProperty('--cursor-x', `${x}px`);
    this.el.nativeElement.style.setProperty('--cursor-y', `${y}px`);
  }
}
