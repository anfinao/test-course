import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { Category } from '../../../../types/category';
import { CategoryItem } from "../category-item/category-item";

@Component({
    selector: 'app-category-list',
    imports: [CategoryItem],
    templateUrl: './category-list.html',
    styleUrl: './category-list.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryList implements DoCheck {
    protected categories: Category[] = [
        {
            "id": "cat-elec-101",
            "name": "Электроника"
        },
        {
            "id": "cat-home-202",
            "name": "Дом и сад"
        },
        {
            "id": "cat-sport-303",
            "name": "Спорт и отдых"
        },
        {
            "id": "cat-appl-404",
            "name": "Бытовая техника"
        },
        {
            "id": "cat-kids-505",
            "name": "Детские товары"
        },
        {
            "id": "cat-auto-606",
            "name": "Автотовары"
        }
    ];

    ngDoCheck(): void {
        console.log('CategoryList')
    }

    checkCheck() {
        console.log('--- CategoryList Checked ---');
        return '';
    }
}
