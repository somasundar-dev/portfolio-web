import { Component, inject, signal } from "@angular/core";
import { ContentService } from "../../services/content.service";
import { PublicContent } from "../../models/content.model";
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
//import { ProjectsComponent } from "./projects/projects.component";
import { ExperienceComponent } from "./experience/experience.component";
import { GithubSectionComponent } from "./github/github-section.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    //ProjectsComponent,
    ExperienceComponent,
    GithubSectionComponent,
    ContactComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  private readonly contentService = inject(ContentService);

  readonly loading = signal(true);
  readonly content = signal<PublicContent | null>(null);

  constructor() {
    this.contentService.getContent().subscribe({
      next: (data) => {
        this.content.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }
}
