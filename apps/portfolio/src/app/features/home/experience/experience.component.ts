import { Component, input } from "@angular/core";
import { ExperienceEntry } from "../../../models/content.model";
import { ScrollRevealDirective } from "../../../shared/directives/scroll-reveal.directive";

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: "./experience.component.html",
  styleUrl: "./experience.component.scss",
})
export class ExperienceComponent {
  readonly experience = input.required<ExperienceEntry[]>();
}
