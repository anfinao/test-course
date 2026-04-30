import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { RouteDataService } from './services/app/route-data.service';
import { MOCK_USER } from './services/token/mock-user.token';
import { AppStoreService } from './services/app/app-store.service';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(
            routes,
            withComponentInputBinding(),
            withInMemoryScrolling({
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
            }),
        ),
        RouteDataService,
        {
            provide: MOCK_USER,
            useValue: {
                id: '1',
                name: 'Some User',
                role: 'admin'
            }
        },
        AppStoreService
    ]
};
