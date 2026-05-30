import { Component, input } from "@angular/core";
import { Skill } from "../../../models/content.model";
import { ScrollRevealDirective } from "../../../shared/directives/scroll-reveal.directive";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent {
  readonly skills = input.required<Skill[]>();
}
