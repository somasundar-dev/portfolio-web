import { Component } from "@angular/core";
import { FooterLink } from "../../models/content.model";

@Component({
  selector: "app-footer",
  standalone: true,
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  socialLinks: FooterLink[] = [
    {
      id: "f1",
      label: "GitHub",
      url: "https://github.com/somasundar-dev",
    },
    {
      id: "f2",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/somasundar-s",
    },
  ];
}
