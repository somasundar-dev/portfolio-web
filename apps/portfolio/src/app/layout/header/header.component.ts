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
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],})
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
