import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-github-section',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section id="github" class="section github">
      <div class="container">
        <div class="section-header" appScrollReveal>
          <span class="section-label">GitHub</span>
          <h2 class="section-title">Open Source & Activity</h2>
        </div>

        <div class="github__grid">
          @for (stat of stats; track stat.label) {
            <div class="glass-card github__stat" appScrollReveal>
              <span class="github__stat-value">{{ stat.value }}</span>
              <span class="github__stat-label">{{ stat.label }}</span>
            </div>
          }
        </div>

        <div class="github__repos" appScrollReveal>
          @for (repo of repos; track repo.name) {
            <a [href]="repo.url" target="_blank" rel="noopener" class="glass-card github__repo">
              <div class="github__repo-header">
                <span class="github__repo-name">{{ repo.name }}</span>
                @if (repo.language) {
                  <span class="github__repo-lang">
                    <span class="lang-dot" [style.background]="repo.color"></span>
                    {{ repo.language }}
                  </span>
                }
              </div>
              <p class="github__repo-desc">{{ repo.description }}</p>
              <div class="github__repo-meta">
                <span>★ {{ repo.stars }}</span>
                <span>⑂ {{ repo.forks }}</span>
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .github__grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      margin-top: 3rem;
    }

    .github__stat {
      padding: 2rem;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(59, 130, 246, 0.2);
      }
    }

    .github__stat-value {
      display: block;
      font-size: 2.5rem;
      font-weight: 800;
      background: var(--gradient-text);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .github__stat-label {
      display: block;
      margin-top: 0.5rem;
      font-size: 0.8125rem;
      color: var(--color-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .github__repos {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      margin-top: 2rem;
    }

    .github__repo {
      padding: 1.5rem;
      text-decoration: none;
      color: inherit;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(59, 130, 246, 0.2);
      }
    }

    .github__repo-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.75rem;
    }

    .github__repo-name {
      font-weight: 600;
      color: var(--color-accent);
    }

    .github__repo-lang {
      display: flex;
      align-items: center;
      gap: 0.375rem;
      font-size: 0.8125rem;
      color: var(--color-text-muted);
    }

    .lang-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .github__repo-desc {
      font-size: 0.875rem;
      line-height: 1.6;
      color: var(--color-text-muted);
      margin-bottom: 1rem;
    }

    .github__repo-meta {
      display: flex;
      gap: 1rem;
      font-size: 0.8125rem;
      color: var(--color-text-muted);
    }

    @media (max-width: 768px) {
      .github__grid { grid-template-columns: repeat(2, 1fr); }
    }
  `],
})
export class GithubSectionComponent {
  readonly stats = [
    { value: '150+', label: 'Contributions' },
    { value: '25', label: 'Repositories' },
    { value: '12', label: 'Stars Earned' },
    { value: '8', label: 'Languages' },
  ];

  readonly repos = [
    {
      name: 'portfolio-cms',
      description: 'Serverless portfolio CMS with Angular, Lambda, and DynamoDB.',
      language: 'TypeScript',
      color: '#3178c6',
      stars: 5,
      forks: 2,
      url: 'https://github.com',
    },
    {
      name: 'dotnet-microservices',
      description: 'Reference architecture for .NET Core microservices on Azure.',
      language: 'C#',
      color: '#178600',
      stars: 8,
      forks: 3,
      url: 'https://github.com',
    },
    {
      name: 'terraform-aws-modules',
      description: 'Reusable Terraform modules for AWS serverless deployments.',
      language: 'HCL',
      color: '#7b42bc',
      stars: 4,
      forks: 1,
      url: 'https://github.com',
    },
  ];
}
