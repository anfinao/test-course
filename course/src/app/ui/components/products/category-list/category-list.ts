import { ChangeDetectionStrategy, Component, DoCheck, inject } from '@angular/core';
import { ProductStoreService } from '../../../../services/products/store.service';
import { CategoryItem } from "../category-item/category-item";

@Component({
    selector: 'app-category-list',
    imports: [CategoryItem],
    templateUrl: './category-list.html',
    styleUrl: './category-list.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryList implements DoCheck {
    private store = inject(ProductStoreService);
    protected categories = this.store.categoryList;

    ngDoCheck(): void {
        // console.log('CategoryList')
    }
}
