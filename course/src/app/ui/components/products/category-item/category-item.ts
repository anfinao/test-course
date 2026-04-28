import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, DoCheck, effect, inject, input, NgZone, OnInit, signal } from '@angular/core';
import { PRODUCT_REPOSITORY_SERVICE } from '../../../../services/products/product-repo.token';
import { Category } from '../../../../types/category';

@Component({
    selector: 'app-category-item',
    imports: [],
    templateUrl: './category-item.html',
    styleUrl: './category-item.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
})
export class CategoryItem implements DoCheck, OnInit {
    private productsService = inject(PRODUCT_REPOSITORY_SERVICE);

    public categoryData = input.required<Category>();
    protected name = computed(() => this.categoryData().name);

    constructor() {
        effect(() => {
            // console.log(this.name())
        });
    }

    ngOnInit(): void {
        //this.cdr.detach();
    }

    ngDoCheck(): void {
        // console.log('CategoryItem')
    }

    protected onClick(): void {
        const id = this.categoryData().id;
        console.log('set category:', id);

        this.productsService.setCategory(id);
    }
}
