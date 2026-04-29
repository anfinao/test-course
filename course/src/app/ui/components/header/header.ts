import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from './menu-item';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.html',
    styleUrl: './header.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
    protected title = 'Product Catalog';

    protected links: MenuItem[] = [
        {
            title: 'Главная',
            linkHref: '/about',
            accessRole: 'admin'
        },
        {
            title: 'Каталог',
            linkHref: '/products',
            accessRole: 'user'
        },
        {
            title: 'Админка',
            linkHref: '/admin',
            accessRole: 'admin'
        },
    ]
}
