import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContentService } from '../../services/content.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ScrollRevealDirective],
  template: `
    <section id="contact" class="section contact">
      <div class="container">
        <div class="section-header" appScrollReveal>
          <span class="section-label">Contact</span>
          <h2 class="section-title">Let's Build Something</h2>
        </div>

        <div class="contact__wrapper">
          <div class="contact__info" appScrollReveal>
            <p class="contact__text">
              Have a project in mind or want to discuss opportunities?
              Drop me a message and I'll get back to you within 24 hours.
            </p>
            <div class="contact__details">
              <div class="contact__detail">
                <span class="contact__detail-label">Email</span>
                <span>hello&#64;somasundar.dev</span>
              </div>
              <div class="contact__detail">
                <span class="contact__detail-label">Location</span>
                <span>Available Remote</span>
              </div>
            </div>
          </div>

          <form class="glass-card contact__form" [formGroup]="form" (ngSubmit)="onSubmit()" appScrollReveal>
            @if (submitStatus() === 'success') {
              <div class="alert alert--success">
                <strong>Message sent!</strong> Thank you for reaching out. I'll respond soon.
              </div>
            }
            @if (submitStatus() === 'error') {
              <div class="alert alert--error">
                <strong>Something went wrong.</strong> Please try again or email me directly.
              </div>
            }

            <div class="form-group">
              <label for="name">Name</label>
              <input id="name" type="text" formControlName="name" placeholder="Your name" />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" type="email" formControlName="email" placeholder="you@example.com" />
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input id="subject" type="text" formControlName="subject" placeholder="What's this about?" />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" formControlName="message" rows="5" placeholder="Tell me about your project..."></textarea>
            </div>

            <button type="submit" class="btn btn--primary btn--full" [disabled]="form.invalid || submitting()">
              {{ submitting() ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact__wrapper {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 3rem;
      margin-top: 3rem;
      align-items: start;
    }

    .contact__text {
      font-size: 1.0625rem;
      line-height: 1.8;
      color: var(--color-text-muted);
      margin-bottom: 2rem;
    }

    .contact__details {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .contact__detail {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .contact__detail-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-accent);
      font-weight: 600;
    }

    .contact__form {
      padding: 2.5rem;
    }

    .form-group {
      margin-bottom: 1.25rem;

      label {
        display: block;
        font-size: 0.8125rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: var(--color-text-muted);
      }

      input, textarea {
        width: 100%;
        padding: 0.875rem 1rem;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(99, 179, 237, 0.15);
        border-radius: 8px;
        color: var(--color-text);
        font-family: inherit;
        font-size: 0.9375rem;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;

        &:focus {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
        }

        &::placeholder { color: rgba(148, 163, 184, 0.5); }
      }

      textarea { resize: vertical; min-height: 120px; }
    }

    .alert {
      padding: 1rem 1.25rem;
      border-radius: 8px;
      margin-bottom: 1.25rem;
      font-size: 0.9375rem;

      &--success {
        background: rgba(16, 185, 129, 0.1);
        border: 1px solid rgba(16, 185, 129, 0.3);
        color: #6ee7b7;
      }

      &--error {
        background: rgba(239, 68, 68, 0.1);
        border: 1px solid rgba(239, 68, 68, 0.3);
        color: #fca5a5;
      }
    }

    @media (max-width: 768px) {
      .contact__wrapper { grid-template-columns: 1fr; }
    }
  `],
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contentService = inject(ContentService);

  readonly submitting = signal(false);
  readonly submitStatus = signal<'idle' | 'success' | 'error'>('idle');

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit(): void {
    if (this.form.invalid) return;

    this.submitting.set(true);
    this.submitStatus.set('idle');

    this.contentService.submitContact(this.form.getRawValue()).subscribe({
      next: () => {
        this.submitStatus.set('success');
        this.form.reset();
        this.submitting.set(false);
      },
      error: () => {
        this.submitStatus.set('error');
        this.submitting.set(false);
      },
    });
  }
}
