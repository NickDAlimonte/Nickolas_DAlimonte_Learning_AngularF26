import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { APP_CONFIG } from "./shared/config/app-config";

import { routes } from './app.routes';
import { CharacterListService } from './services/character-list-service';
import { MockCharacterListService } from './services/mock-character-list-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    { provide: APP_CONFIG,
      useValue: {
      apiBaseUrl: 'https://placeholder.example.com/api',
        defaultCategory: 'all',
      }},

    { provide: CharacterListService, useClass: MockCharacterListService}
  ]


};
