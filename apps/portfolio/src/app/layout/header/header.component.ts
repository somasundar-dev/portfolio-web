import { Component, HostListener, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled()">
      <div class="header__inner container">
        <a href="#" class="header__logo" (click)="scrollTo('hero', $event)">
          <span class="logo-accent">&lt;</span>S<span class="logo-accent">/&gt;</span>
        </a>

        <nav class="header__nav" [class.open]="menuOpen()">
          @for (item of navItems; track item.id) {
            <a
              class="header__link"
              [class.active]="activeSection() === item.id"
              [href]="'#' + item.id"
              (click)="scrollTo(item.id, $event)"
            >{{ item.label }}</a>
          }
        </nav>

        <button class="header__toggle" (click)="toggleMenu()" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 1.25rem 0;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

      &.scrolled {
        padding: 0.75rem 0;
        background: rgba(8, 10, 20, 0.85);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(99, 179, 237, 0.1);
      }
    }

    .header__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .header__logo {
      font-family: var(--font-mono);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text);
      text-decoration: none;

      .logo-accent { color: var(--color-accent); }
    }

    .header__nav {
      display: flex;
      gap: 2rem;
    }

    .header__link {
      position: relative;
      color: var(--color-text-muted);
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      transition: color 0.3s ease;

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--gradient-accent);
        transition: width 0.3s ease;
      }

      &:hover, &.active {
        color: var(--color-text);

        &::after { width: 100%; }
      }

      &.active { color: var(--color-accent); }
    }

    .header__toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;

      span {
        display: block;
        width: 24px;
        height: 2px;
        background: var(--color-text);
        transition: all 0.3s ease;
      }
    }

    @media (max-width: 768px) {
      .header__toggle { display: flex; }

      .header__nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 280px;
        height: 100vh;
        flex-direction: column;
        padding: 5rem 2rem;
        background: rgba(8, 10, 20, 0.98);
        backdrop-filter: blur(20px);
        transition: right 0.4s ease;
        gap: 1.5rem;

        &.open { right: 0; }
      }
    }
  `],
})
export class HeaderComponent implements OnInit, OnDestroy {
  readonly navItems: NavItem[] = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'github', label: 'GitHub' },
    { id: 'contact', label: 'Contact' },
  ];

  readonly isScrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly activeSection = signal('hero');

  private observer?: IntersectionObserver;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    ['hero', ...this.navItems.map((n) => n.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.observer?.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  scrollTo(id: string, event: Event): void {
    event.preventDefault();
    this.menuOpen.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }
}
