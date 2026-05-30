import { Component, input } from '@angular/core';
import { HeroContent } from '../../../models/content.model';
import { CursorGlowDirective } from '../../../shared/directives/cursor-glow.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CursorGlowDirective],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],})
export class HeroComponent {
  readonly content = input.required<HeroContent>();
}
