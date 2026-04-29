import { ChangeDetectionStrategy, Component, computed, effect, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCardService } from '../../../services/product-card/product-card-service';
import { ProductCardStore } from '../../../services/product-card/product-card.store';
import { PRODUCT_ID, productIdFn } from '../../../services/token/product-id.token';
import { Title } from '@angular/platform-browser';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../../../types';

@Component({
    selector: 'app-product',
    imports: [],
    templateUrl: './product.html',
    styleUrl: './product.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: PRODUCT_ID,
            useFactory: productIdFn,
            deps: [ActivatedRoute]
        },
    ]
})
export class ProductComponent implements OnInit {
    private readonly productCardService = inject(ProductCardService);
    private readonly productCardStore = inject(ProductCardStore);
    protected readonly productId = inject(PRODUCT_ID);
    protected readonly title = inject(Title);

    /** Пример с получением данных из резолвера */
    private readonly route = inject(ActivatedRoute);
    private readonly data = toSignal(this.route.data);
    protected productFromRoute = computed(() => this.data()?.['product'] as Product);


    protected readonly productInfo = this.productCardStore.productInfo;

    constructor() {
        effect(() => {
            const data = this.productInfo();
            if (data) {
                this.title.setTitle(data.name);
            }
        })
    }

    public ngOnInit(): void {
        const productId = this.productId();
        if (productId) {
            this.productCardService.loadProductInfo(productId);
        }
    }
}
