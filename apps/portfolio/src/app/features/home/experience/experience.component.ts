import { Component, input } from '@angular/core';
import { ExperienceEntry } from '../../../models/content.model';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section id="experience" class="section experience">
      <div class="container">
        <div class="section-header" appScrollReveal>
          <span class="section-label">Experience</span>
          <h2 class="section-title">Career Journey</h2>
        </div>

        <div class="timeline">
          @for (entry of experience(); track entry.id; let i = $index; let last = $last) {
            <div class="timeline__item" appScrollReveal>
              <div class="timeline__marker">
                <div class="timeline__dot"></div>
                @if (!last) { <div class="timeline__line"></div> }
              </div>

              <div class="glass-card timeline__content">
                <div class="timeline__header">
                  <div>
                    <h3 class="timeline__role">{{ entry.role }}</h3>
                    <p class="timeline__company">{{ entry.company }}</p>
                  </div>
                  <span class="timeline__date">{{ entry.startDate }} — {{ entry.endDate }}</span>
                </div>

                <ul class="timeline__achievements">
                  @for (achievement of entry.achievements; track achievement) {
                    <li>{{ achievement }}</li>
                  }
                </ul>

                <div class="timeline__tech">
                  @for (tech of entry.technologies; track tech) {
                    <span class="chip">{{ tech }}</span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .timeline__item {
      display: grid;
      grid-template-columns: 40px 1fr;
      gap: 1.5rem;
    }

    .timeline__marker {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 1.5rem;
    }

    .timeline__dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--gradient-accent);
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
      flex-shrink: 0;
    }

    .timeline__line {
      width: 2px;
      flex: 1;
      min-height: 40px;
      background: linear-gradient(to bottom, rgba(59, 130, 246, 0.4), rgba(59, 130, 246, 0.05));
      margin-top: 0.5rem;
    }

    .timeline__content {
      padding: 1.75rem 2rem;
      margin-bottom: 1.5rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateX(8px);
        box-shadow: 0 12px 40px rgba(59, 130, 246, 0.15);
      }
    }

    .timeline__header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .timeline__role {
      font-size: 1.125rem;
      font-weight: 700;
    }

    .timeline__company {
      color: var(--color-accent);
      font-size: 0.9375rem;
      margin-top: 0.25rem;
    }

    .timeline__date {
      flex-shrink: 0;
      font-family: var(--font-mono);
      font-size: 0.8125rem;
      color: var(--color-text-muted);
      padding: 0.375rem 0.75rem;
      border: 1px solid rgba(99, 179, 237, 0.15);
      border-radius: 6px;
    }

    .timeline__achievements {
      list-style: none;
      padding: 0;
      margin: 0 0 1rem;

      li {
        position: relative;
        padding-left: 1.25rem;
        margin-bottom: 0.5rem;
        font-size: 0.9375rem;
        line-height: 1.6;
        color: var(--color-text-muted);

        &::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--color-accent);
        }
      }
    }

    .timeline__tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    @media (max-width: 640px) {
      .timeline__header { flex-direction: column; }
    }
  `],
})
export class ExperienceComponent {
  readonly experience = input.required<ExperienceEntry[]>();
}
