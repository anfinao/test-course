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
            title: 'About',
            linkHref: '/about',
            accessRole: 'admin'
        },
        {
            title: 'Catalog',
            linkHref: '/products',
            accessRole: 'user'
        },
    ]
}
