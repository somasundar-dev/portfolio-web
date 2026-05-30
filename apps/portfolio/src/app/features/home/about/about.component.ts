import { Component, input } from '@angular/core';
import { AboutContent } from '../../../models/content.model';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section id="about" class="section about">
      <div class="container">
        <div class="section-header" appScrollReveal>
          <span class="section-label">About Me</span>
          <h2 class="section-title">Engineering with Purpose</h2>
        </div>

        <div class="about__grid">
          <div class="glass-card about__bio" appScrollReveal>
            <p>{{ content().bio }}</p>
            <p class="about__summary">{{ content().experienceSummary }}</p>
          </div>

          <div class="about__strengths">
            @for (strength of content().strengths; track strength; let i = $index) {
              <div class="glass-card strength-card" appScrollReveal [style.animation-delay]="i * 0.1 + 's'">
                <div class="strength-card__icon">{{ i + 1 }}</div>
                <p>{{ strength }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about__grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-top: 3rem;
    }

    .about__bio {
      padding: 2.5rem;

      p {
        font-size: 1.0625rem;
        line-height: 1.8;
        color: var(--color-text-muted);
      }
    }

    .about__summary {
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(99, 179, 237, 0.1);
      color: var(--color-accent) !important;
      font-weight: 500;
    }

    .about__strengths {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .strength-card {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 1.25rem 1.5rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateX(8px);
        box-shadow: 0 8px 32px rgba(59, 130, 246, 0.15);
      }

      p {
        font-size: 0.9375rem;
        color: var(--color-text-muted);
        line-height: 1.5;
      }
    }

    .strength-card__icon {
      flex-shrink: 0;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      background: var(--gradient-accent);
      color: white;
      font-weight: 700;
      font-size: 0.875rem;
    }

    @media (max-width: 768px) {
      .about__grid { grid-template-columns: 1fr; }
    }
  `],
})
export class AboutComponent {
  readonly content = input.required<AboutContent>();
}
