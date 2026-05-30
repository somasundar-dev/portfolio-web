import { Component } from "@angular/core";
import { ScrollRevealDirective } from "../../../shared/directives/scroll-reveal.directive";

@Component({
  selector: "app-github-section",
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: "./github-section.component.html",
  styleUrls: ["./github-section.component.scss"],
})
export class GithubSectionComponent {
  // readonly stats = [
  //   { value: '150+', label: 'Contributions' },
  //   { value: '25', label: 'Repositories' },
  //   { value: '12', label: 'Stars Earned' },
  //   { value: '8', label: 'Languages' },
  // ];

  readonly repos = [
    {
      name: "portfolio-web",
      description: "Serverless portfolio with Angular, Lambda, and DynamoDB.",
      language: "TypeScript",
      color: "#3178c6",
      url: "https://github.com/somasundar-dev/portfolio-web",
    },
    {
      name: "devops-toolkit",
      description:
        "A centralised repository for shared GitHub Actions workflows to ensure consistent CI/CD processes across the repositories.",
      language: "YAML",
      color: "#178600",
      url: "https://github.com/somasundar-dev/devops-toolkit",
    },
    {
      name: "terraform-aws-modules",
      description: "Reusable Terraform modules for AWS serverless deployments.",
      language: "HCL",
      color: "#7b42bc",
      url: "https://github.com/somasundar-dev/terraform-aws-modules",
    },
  ];
}
