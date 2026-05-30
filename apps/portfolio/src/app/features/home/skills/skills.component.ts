import { Component, computed, input } from '@angular/core';
import { Skill } from '../../../models/content.model';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section id="skills" class="section skills">
      <div class="container">
        <div class="section-header" appScrollReveal>
          <span class="section-label">Skills</span>
          <h2 class="section-title">Technical Expertise</h2>
        </div>

        @for (category of categories(); track category) {
          <div class="skills__category" appScrollReveal>
            <h3 class="skills__category-title">{{ category }}</h3>
            <div class="skills__grid">
              @for (skill of getSkillsByCategory(category); track skill.id) {
                <div class="glass-card skill-card">
                  <div class="skill-card__header">
                    <span class="skill-card__name">{{ skill.name }}</span>
                    <span class="skill-card__level">{{ skill.level }}%</span>
                  </div>
                  <div class="skill-card__bar">
                    <div class="skill-card__fill" [style.width.%]="skill.level"></div>
                  </div>
                </div>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .skills__category {
      margin-top: 2.5rem;
    }

    .skills__category-title {
      font-size: 1rem;
      font-weight: 600;
      color: var(--color-accent);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 1.25rem;
    }

    .skills__grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1rem;
    }

    .skill-card {
      padding: 1.25rem 1.5rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(59, 130, 246, 0.2);
      }
    }

    .skill-card__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.75rem;
    }

    .skill-card__name {
      font-weight: 600;
      font-size: 0.9375rem;
    }

    .skill-card__level {
      font-family: var(--font-mono);
      font-size: 0.8125rem;
      color: var(--color-accent);
    }

    .skill-card__bar {
      height: 4px;
      background: rgba(99, 179, 237, 0.1);
      border-radius: 2px;
      overflow: hidden;
    }

    .skill-card__fill {
      height: 100%;
      background: var(--gradient-accent);
      border-radius: 2px;
      transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
    }
  `],
})
export class SkillsComponent {
  readonly skills = input.required<Skill[]>();

  readonly categories = computed(() => {
    const cats = [...new Set(this.skills().map((s) => s.category))];
    return cats;
  });

  getSkillsByCategory(category: string): Skill[] {
    return this.skills().filter((s) => s.category === category);
  }
}
