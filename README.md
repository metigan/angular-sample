# Metigan App

A modern Angular application demonstrating email sending capabilities using the [Metigan Angular SDK](https://www.npmjs.com/package/@metigan/angular). Send emails, manage forms, contacts, and audiences with ease in your Angular applications.

![Angular](https://img.shields.io/badge/Angular-21.0.0-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)
![Metigan SDK](https://img.shields.io/badge/Metigan-SDK-green?style=flat-square)

## ✨ Features

- 📧 **Send Emails**: Send HTML emails with ease using the Metigan SDK
- 🎨 **Modern UI**: Beautiful and responsive interface built with Angular
- ⚡ **Fast & Efficient**: Built with Angular 21 and standalone components
- 🔒 **Type Safe**: Full TypeScript support
- 🚀 **SSR Ready**: Server-side rendering support included

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd metigan-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Configure Metigan SDK:
   
   Open `src/app/app.config.ts` and replace `'your-api-key'` with your actual Metigan API key:

```typescript
const metiganConfig: MetiganClientOptions = {
  apiKey: 'your-actual-api-key-here',
  // Optional options:
  // userId: 'user-123',
  // timeout: 60000,
  // retryCount: 5,
  // retryDelay: 2000,
  // apiUrl: 'https://api.metigan.io'
};
```

4. Start the development server:
```bash
ng serve
# or
npm start
```

5. Open your browser and navigate to `http://localhost:4200/`

## 📖 Usage

### Sending an Email

1. Fill in the email form on the homepage:
   - **From**: Your sender email address (format: `Your Name <email@example.com>`)
   - **To**: Recipient email address
   - **Subject**: Email subject line
   - **Content**: Email body in HTML format

2. Click the "Send Email" button

3. You'll receive instant feedback:
   - ✅ Success message with email details
   - ❌ Error message if something goes wrong

### Example Email

```html
<h1>Hello!</h1>
<p>This is my first email sent using the Metigan SDK.</p>
<p>It works perfectly! 🎉</p>
```

## 🏗️ Project Structure

```
metigan-app/
├── src/
│   ├── app/
│   │   ├── app.config.ts      # Application configuration with Metigan SDK setup
│   │   ├── app.ts             # Main application component with email sending logic
│   │   ├── app.html           # Application template with email form
│   │   ├── app.routes.ts      # Application routes
│   │   └── app.css            # Application styles
│   ├── main.ts                # Application bootstrap
│   └── index.html             # HTML entry point
├── angular.json               # Angular CLI configuration
├── package.json               # Project dependencies
└── README.md                  # This file
```

## 🛠️ Technologies Used

- **Angular 21**: Modern Angular framework with standalone components
- **TypeScript**: Type-safe JavaScript
- **Metigan Angular SDK**: Official SDK for Metigan email services
- **RxJS**: Reactive programming library
- **Tailwind CSS**: Utility-first CSS framework (if configured)

## 📦 Metigan SDK Features

This application demonstrates the email sending capabilities. The Metigan SDK also supports:

- 📋 **Forms**: Submit and manage forms
- 👥 **Contacts**: Create, update, and manage contacts
- 📊 **Audiences**: Manage email lists and audiences
- 📧 **Templates**: Use and manage email templates

For more information, visit the [Metigan Angular SDK Documentation](https://www.npmjs.com/package/@metigan/angular).

## 🔧 Available Scripts

```bash
# Start development server
ng serve

# Build for production
ng build

# Run unit tests
ng test

# Run linting
ng lint

# Build with SSR
ng build --configuration production
```

## ⚙️ Configuration Options

The Metigan SDK can be configured with the following options in `app.config.ts`:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `apiKey` | `string` | Required | Your Metigan API key |
| `userId` | `string` | Optional | User ID for logging |
| `timeout` | `number` | Optional | Request timeout in milliseconds |
| `retryCount` | `number` | Optional | Number of retry attempts |
| `retryDelay` | `number` | Optional | Delay between retries in milliseconds |
| `apiUrl` | `string` | Optional | Custom API URL |

## 🐛 Troubleshooting

### SDK Not Initialized

If you see the error "Metigan SDK was not initialized":
- Check that your API key is correctly set in `app.config.ts`
- Ensure the API key is valid and has the necessary permissions

### Email Not Sending

- Verify your API key is correct
- Check that the recipient email address is valid
- Ensure your Metigan account has available email credits
- Check the browser console for detailed error messages

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Resources

- [Angular Documentation](https://angular.dev)
- [Metigan Angular SDK](https://www.npmjs.com/package/@metigan/angular)
- [Metigan Website](https://metigan.io)
- [Angular CLI Documentation](https://angular.dev/tools/cli)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Support

For support with Metigan SDK, open a ticket in the dashboard: [Metigan Support](https://app.metigan.io/support).

---

Made with ❤️ using Angular and Metigan SDK
