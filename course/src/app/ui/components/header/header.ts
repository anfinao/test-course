import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.html',
    styleUrl: './header.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
    protected title = 'Product Catalog';

    protected links: MenuItem[] = [
        {
            title: 'Link 1',
            linkHref: '/link1',
            accessRole: 'admin'
        },
        {
            title: 'Link 2',
            linkHref: '/link2',
            accessRole: 'user'
        },
    ]
}
