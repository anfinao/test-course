import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, inject, input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../../../types';
import { ProductItem } from "../product-item/product-item";
import { AddProductModal } from "../add-product-modal/add-product-modal";
import { ProductStoreService } from '../../../../services/products/store.service';
import { PRODUCT_REPOSITORY_SERVICE } from '../../../../services/products/product-repo.token';
import { ProductRepositoryService } from '../../../../services/products/product-repository.service';

@Component({
    selector: 'app-products-list',
    imports: [ProductItem, AddProductModal],
    templateUrl: './products-list.html',
    styleUrl: './products-list.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        ProductStoreService,
        { provide: PRODUCT_REPOSITORY_SERVICE, useClass: ProductRepositoryService }
    ]
})
export class ProductsList implements DoCheck, OnInit, OnChanges {
    private productStore = inject(ProductStoreService);
    private productRepostoryService = inject(PRODUCT_REPOSITORY_SERVICE);

    protected productList = this.productStore.productList;

    public text = input();
    protected isAddModalOpen = signal(false);

    ngOnChanges(changes: SimpleChanges): void {
        console.log({ changes })
    }

    ngOnInit(): void {
        this.productRepostoryService.loadProducts();

        console.log('ProductsList ngOnInit')
    }

    ngDoCheck(): void {
        //console.log('ProductList');
    }

    protected openModal(): void {
        this.isAddModalOpen.set(true);
    }

    protected closeModal(): void {
        this.isAddModalOpen.set(false);

        setTimeout(() => {
            // this.productList.push({
            //     id: "1" + new Date().toString(),
            //     name: new Date().toString(),
            //     description: "Регулируемая яркость и цветовая температура, сенсорное управление.",
            //     price: 3200,
            //     category: "Дом и свет"
            // });

            // console.log('ADD');
            // this.cdr.markForCheck();
        }, 1000)
    }

    protected deleteProduct(id: string): void {
        this.productRepostoryService.deleteProduct(id);
    }
}
