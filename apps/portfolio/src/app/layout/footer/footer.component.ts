import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container footer__inner">
        <div class="footer__brand">
          <span class="footer__logo">&lt;Somasundar /&gt;</span>
          <p class="footer__tagline">Building the future, one commit at a time.</p>
        </div>

        <div class="footer__social">
          @for (link of socialLinks; track link.label) {
            <a [href]="link.url" target="_blank" rel="noopener" class="footer__link" [attr.aria-label]="link.label">
              {{ link.label }}
            </a>
          }
        </div>

        <p class="footer__copy">&copy; {{ year }} Somasundar. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      padding: 4rem 0 2rem;
      border-top: 1px solid rgba(99, 179, 237, 0.1);
      background: rgba(8, 10, 20, 0.5);
    }

    .footer__inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      text-align: center;
    }

    .footer__logo {
      font-family: var(--font-mono);
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--color-accent);
    }

    .footer__tagline {
      font-size: 0.875rem;
      color: var(--color-text-muted);
      margin-top: 0.5rem;
    }

    .footer__social {
      display: flex;
      gap: 1.5rem;
    }

    .footer__link {
      color: var(--color-text-muted);
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      transition: color 0.3s ease;

      &:hover { color: var(--color-accent); }
    }

    .footer__copy {
      font-size: 0.8125rem;
      color: rgba(148, 163, 184, 0.5);
    }
  `],
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly socialLinks = [
    { label: 'GitHub', url: 'https://github.com' },
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'Twitter', url: 'https://twitter.com' },
  ];
}
