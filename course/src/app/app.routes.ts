import { Routes } from '@angular/router';
import { ProductCardService } from './services/product-card/product-card-service';
import { ProductCardStore } from './services/product-card/product-card.store';
import { productResolver } from './services/resolvers/product.resolver';
import { canActivate } from './services/guards/can-activate-example';
import { canDeactivate } from './services/guards/can-deactivate-example';
import { MOCK_USER } from './services/token/mock-user.token';
import { inject } from '@angular/core';
import { ErrorPage } from './ui/pages/error-page/error-page';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about'
    },
    {
        path: 'about',
        loadComponent: () => import('./ui/pages/main-page/main-page').then(c => c.MainPage),
        title: 'Главная',
        data: {
            hello: '1234'
        },
    },
    {
        path: 'admin',
        loadComponent: () => import('./ui/pages/admin-page/admin-page').then(c => c.AdminPage),
        canActivate: [canActivate],
        canDeactivate: [canDeactivate],
        canMatch: [() => {
            const user = inject(MOCK_USER);
            console.warn('canActivate')
            return user.role === 'admin';
        }]
    },
    {
        path: 'admin',
        loadComponent: () => import('./ui/pages/user-settings/user-settings').then(c => c.UserSettings),
        canMatch: [() => {
            const user = inject(MOCK_USER);
            console.warn('canActivate')
            return user.role === 'user';
        }]
    },
    {
        path: 'products',
        loadComponent: () => import('./ui/pages/products/products').then(c => c.Products),
        children: [
            {
                path: '',
                loadComponent: () => import('./ui/pages/catalog/catalog').then(c => c.Catalog),
                data: {
                    hello: 'hello'
                }
            },
            {
                path: ':id',
                loadComponent: () => import('./ui/pages/product-card/product').then(c => c.ProductComponent),
                providers: [
                    ProductCardService,
                    ProductCardStore
                ],
                resolve: {
                    product: productResolver
                },
                data: {
                    hello: 'product',
                }
            }
        ],
        title: 'Каталог продуктов',
        data: {
            test: 'hello'
        }
    },
    {
        path: '**',
        component: ErrorPage
    }
];
