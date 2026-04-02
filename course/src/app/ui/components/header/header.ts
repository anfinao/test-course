import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.html',
    styleUrl: './header.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
    protected title = 'Product Catalog';
    protected link = {
        name: 'Mock link',
        href: '#'
    }
}
