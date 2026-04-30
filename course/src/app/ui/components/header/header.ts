import { ChangeDetectionStrategy, Component, inject, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AppStoreService } from '../../../services/app/app-store.service';
import { CanView } from "../../directives/canView";
import { MenuItem } from './menu-item';
import { CustomIfDirective } from "../../directives/custom-if.directive";

@Component({
    selector: 'app-header',
    imports: [
        RouterLink,
        RouterLinkActive,
        MatIconModule,
        MatTooltipModule,
        CanView,
        CustomIfDirective
    ],
    templateUrl: './header.html',
    styleUrl: './header.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [NO_ERRORS_SCHEMA]
})
export class Header {
    protected roles = ['admin'];
    private readonly appStore = inject(AppStoreService);
    protected isEditMode = this.appStore.isEditMode;
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

    protected toggleEditMode(): void {
        this.appStore.toggleEditMode();
    }
}
