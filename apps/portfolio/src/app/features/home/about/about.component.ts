import { Component, input } from '@angular/core';
import { AboutContent } from '../../../models/content.model';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],})
export class AboutComponent {
  readonly content = input.required<AboutContent>();
}
