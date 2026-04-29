import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, DoCheck, effect, inject, input, NgZone, OnInit, signal } from '@angular/core';
import { PRODUCT_REPOSITORY_SERVICE } from '../../../../services/products/product-repo.token';
import { Category } from '../../../../types/category';
import { ProductStoreService } from '../../../../services/products/store.service';

@Component({
    selector: 'app-category-item',
    imports: [],
    templateUrl: './category-item.html',
    styleUrl: './category-item.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
})
export class CategoryItem implements DoCheck, OnInit {
    private productsService = inject(PRODUCT_REPOSITORY_SERVICE);
    private storeService = inject(ProductStoreService);

    public categoryData = input.required<Category>();

    protected id = computed(() => this.categoryData().id);
    protected name = computed(() => this.categoryData().name);
    protected selected = computed(() => this.storeService.selectedCategoryId() === this.id())

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
        const id = this.id();
        this.productsService.setCategory(id);
    }
}
