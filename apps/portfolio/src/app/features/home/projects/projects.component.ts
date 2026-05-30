import { Component, input } from '@angular/core';
import { Project } from '../../../models/content.model';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],})
export class ProjectsComponent {
  readonly projects = input.required<Project[]>();
}
