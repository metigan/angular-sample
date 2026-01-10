import { Component, signal, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MetiganService } from '@metigan/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('metigan-app');
  private metigan = inject(MetiganService);

  // Form states
  loading = signal(false);
  message = signal<string>('');
  error = signal<string>('');
  success = signal(false);

  // Form fields
  emailForm = {
    from: 'Your Company <noreply@yourcompany.com>',
    to: '',
    subject: 'My First Email with Metigan',
    content: '<h1>Hello!</h1><p>This is my first email sent using the Metigan SDK.</p><p>It works perfectly! 🎉</p>'
  };

  ngOnInit() {
    // Check if the service was initialized automatically
    if (this.metigan.isInitialized()) {
      console.log('Metigan SDK initialized successfully!');
      this.message.set('Metigan SDK is ready to use!');
    } else {
      console.warn('Metigan SDK was not initialized. Please check the configuration in app.config.ts');
      this.error.set('Metigan SDK was not initialized. Please check the configuration in app.config.ts');
    }
  }

  sendEmail() {
    // Basic validation
    if (!this.emailForm.to || !this.emailForm.to.includes('@')) {
      this.error.set('Please enter a valid email address for the recipient.');
      this.success.set(false);
      return;
    }

    if (!this.emailForm.from || !this.emailForm.from.includes('@')) {
      this.error.set('Please enter a valid email address for the sender.');
      this.success.set(false);
      return;
    }

    // Clear previous messages
    this.loading.set(true);
    this.error.set('');
    this.message.set('');
    this.success.set(false);

    // Send email
    this.metigan.email.sendEmail({
      from: this.emailForm.from,
      recipients: [this.emailForm.to],
      subject: this.emailForm.subject,
      content: this.emailForm.content
    }).subscribe({
      next: (response) => {
        this.loading.set(false);
        this.success.set(true);
        this.message.set(`✅ Email sent successfully! ${response.message || ''}`);
        if (response.emailsRemaining !== undefined) {
          this.message.set(this.message() + ` Emails remaining: ${response.emailsRemaining}`);
        }
        console.log('Email sent:', response);
        
        // Clear form after success
        setTimeout(() => {
          this.emailForm.to = '';
        }, 3000);
      },
      error: (error) => {
        this.loading.set(false);
        this.success.set(false);
        const errorMessage = error.message || error.error?.message || 'Unknown error sending email';
        this.error.set(`❌ Error: ${errorMessage}`);
        console.error('Error sending email:', error);
      }
    });
  }
}
