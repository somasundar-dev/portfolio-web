import { Component, inject, signal } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { PublicContent } from '../../models/content.model';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { GithubSectionComponent } from './github/github-section.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    GithubSectionComponent,
    ContactComponent,
  ],
  template: `
    <app-header />

    @if (loading()) {
      <div class="loading-screen">
        <div class="loading-spinner"></div>
      </div>
    } @else if (content()) {
      <main>
        <app-hero [content]="content()!.hero" />
        <app-about [content]="content()!.about" />
        <app-skills [skills]="content()!.skills" />
        <app-projects [projects]="content()!.projects" />
        <app-experience [experience]="content()!.experience" />
        <app-github-section />
        <app-contact />
      </main>
      <app-footer />
    }
  `,
  styles: [`
    .loading-screen {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .loading-spinner {
      width: 48px;
      height: 48px;
      border: 3px solid rgba(59, 130, 246, 0.2);
      border-top-color: var(--color-accent);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `],
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
