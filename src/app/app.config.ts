import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { METIGAN_CONFIG } from '@metigan/angular';
import { MetiganClientOptions } from '@metigan/angular';

// Configure Metigan SDK
const metiganConfig: MetiganClientOptions = {
  apiKey: 'your-api-key', // Replace with your API key
  // Optional options:
  // userId: 'user-123',
  // timeout: 60000,
  // retryCount: 5,
  // retryDelay: 2000,
 
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(), // Required for Metigan SDK
    {
      provide: METIGAN_CONFIG,
      useValue: metiganConfig
    }
  ]
};
