import { ChangeDetectionStrategy, Component, inject, input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { FormsModule, ɵInternalFormsSharedModule } from "@angular/forms";
import { PRODUCT_REPOSITORY_SERVICE } from '../../../../services/products/product-repo.token';
import { ProductStoreService } from '../../../../services/products/store.service';
import { AddProductModal } from "../add-product-modal/add-product-modal";
import { ProductItem } from "../product-item/product-item";

@Component({
    selector: 'app-products-list',
    imports: [ProductItem, AddProductModal, FormsModule],
    templateUrl: './products-list.html',
    styleUrl: './products-list.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsList implements OnInit, OnChanges {
    private productStore = inject(ProductStoreService);
    private productRepostoryService = inject(PRODUCT_REPOSITORY_SERVICE);

    protected productList = this.productStore.productList;

    public text = input();
    protected isAddModalOpen = signal(false);

    protected searchData = '';

    ngOnChanges(changes: SimpleChanges): void {
        // console.log({ changes })
    }

    ngOnInit(): void {
        this.productRepostoryService.loadProducts();

        console.log('ProductsList ngOnInit')
    }

    protected search(value: Event): void {
        //console.log({ value })
        this.productRepostoryService.search(this.searchData);
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
