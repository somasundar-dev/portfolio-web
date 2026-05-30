import { Component, inject, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ContentService } from "../../services/content.service";
import { ScrollRevealDirective } from "../../shared/directives/scroll-reveal.directive";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [ReactiveFormsModule, ScrollRevealDirective],
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contentService = inject(ContentService);

  readonly submitting = signal(false);
  readonly submitStatus = signal<"idle" | "success" | "error">("idle");

  readonly form = this.fb.nonNullable.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", [Validators.required, Validators.email]],
    subject: ["", Validators.required],
    message: ["", [Validators.required, Validators.minLength(10)]],
  });

  onSubmit(): void {
    if (this.form.invalid) return;

    this.submitting.set(true);
    this.submitStatus.set("idle");

    this.contentService.submitContact(this.form.getRawValue()).subscribe({
      next: () => {
        this.submitStatus.set("success");
        this.form.reset();
        this.submitting.set(false);
      },
      error: () => {
        this.submitStatus.set("error");
        this.submitting.set(false);
      },
    });
  }
}
