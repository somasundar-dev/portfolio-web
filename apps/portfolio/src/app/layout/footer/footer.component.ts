import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly socialLinks = [
    { label: 'GitHub', url: 'https://github.com' },
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'Twitter', url: 'https://twitter.com' },
  ];
}
