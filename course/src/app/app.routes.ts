import { Routes } from '@angular/router';
import { ProductStoreService } from './services/products/store.service';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about'
    },
    {
        path: 'about',
        loadComponent: () => import('./ui/pages/main-page/main-page').then(c => c.MainPage),
    },
    {
        path: 'products',
        loadComponent: () => import('./ui/pages/products/products').then(c => c.Products),
    }
];
