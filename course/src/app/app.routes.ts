import { Routes } from '@angular/router';

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
        children: [
            {
                path: ':id',
                loadComponent: () => import('./ui/pages/product/product').then(c => c.Product)
            }
        ]
    }
];
