import { Component, input } from '@angular/core';
import { Project } from '../../../models/content.model';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section id="projects" class="section projects">
      <div class="container">
        <div class="section-header" appScrollReveal>
          <span class="section-label">Projects</span>
          <h2 class="section-title">Featured Work</h2>
        </div>

        <div class="projects__grid">
          @for (project of projects(); track project.id; let i = $index) {
            <article class="glass-card project-card" appScrollReveal [class.featured]="project.featured">
              @if (project.featured) {
                <span class="project-card__badge">Featured</span>
              }

              <div class="project-card__header">
                <h3 class="project-card__title">{{ project.title }}</h3>
                @if (project.category) {
                  <span class="project-card__category">{{ project.category }}</span>
                }
              </div>

              <p class="project-card__summary">{{ project.summary }}</p>

              <div class="project-card__tech">
                @for (tech of project.techStack; track tech) {
                  <span class="chip">{{ tech }}</span>
                }
              </div>

              @if (project.impactMetrics.length) {
                <div class="project-card__metrics">
                  @for (metric of project.impactMetrics; track metric.label) {
                    <div class="metric">
                      <span class="metric__value">{{ metric.value }}</span>
                      <span class="metric__label">{{ metric.label }}</span>
                    </div>
                  }
                </div>
              }

              <div class="project-card__links">
                @if (project.liveUrl) {
                  <a [href]="project.liveUrl" target="_blank" rel="noopener" class="btn btn--ghost btn--sm">Live Demo</a>
                }
                @if (project.repoUrl) {
                  <a [href]="project.repoUrl" target="_blank" rel="noopener" class="btn btn--ghost btn--sm">Source Code</a>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects__grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 1.5rem;
      margin-top: 3rem;
    }

    .project-card {
      position: relative;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transition: transform 0.4s ease, box-shadow 0.4s ease;

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 60px rgba(59, 130, 246, 0.2);
      }

      &.featured {
        border-color: rgba(59, 130, 246, 0.3);
      }
    }

    .project-card__badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 0.25rem 0.75rem;
      font-size: 0.6875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background: var(--gradient-accent);
      color: white;
      border-radius: 999px;
    }

    .project-card__header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
    }

    .project-card__title {
      font-size: 1.25rem;
      font-weight: 700;
    }

    .project-card__category {
      flex-shrink: 0;
      font-size: 0.75rem;
      color: var(--color-accent);
      padding: 0.25rem 0.625rem;
      border: 1px solid rgba(99, 179, 237, 0.2);
      border-radius: 999px;
    }

    .project-card__summary {
      font-size: 0.9375rem;
      line-height: 1.7;
      color: var(--color-text-muted);
      flex: 1;
    }

    .project-card__tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .project-card__metrics {
      display: flex;
      gap: 2rem;
      padding: 1rem 0;
      border-top: 1px solid rgba(99, 179, 237, 0.1);
      border-bottom: 1px solid rgba(99, 179, 237, 0.1);
    }

    .metric {
      display: flex;
      flex-direction: column;
      gap: 0.125rem;
    }

    .metric__value {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--color-accent);
    }

    .metric__label {
      font-size: 0.75rem;
      color: var(--color-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .project-card__links {
      display: flex;
      gap: 0.75rem;
      margin-top: auto;
    }

    @media (max-width: 480px) {
      .projects__grid { grid-template-columns: 1fr; }
    }
  `],
})
export class ProjectsComponent {
  readonly projects = input.required<Project[]>();
}
