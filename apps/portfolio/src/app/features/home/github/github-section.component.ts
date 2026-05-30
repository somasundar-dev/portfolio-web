import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-github-section',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './github-section.component.html',
  styleUrls: ['./github-section.component.scss'],})
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
