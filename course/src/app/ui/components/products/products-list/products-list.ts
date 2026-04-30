import { ChangeDetectionStrategy, Component, inject, input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { FormsModule, ɵInternalFormsSharedModule } from "@angular/forms";
import { PRODUCT_REPOSITORY_SERVICE } from '../../../../services/products/product-repo.token';
import { ProductStoreService } from '../../../../services/products/store.service';
import { AddProductModal } from "../add-product-modal/add-product-modal";
import { ProductItem } from "../product-item/product-item";
import { Product } from '../../../../types';
import { ActivatedRoute, Router } from '@angular/router';
import { AppStoreService } from '../../../../services/app/app-store.service';
import { CurrencyPipe, DatePipe, DecimalPipe, KeyValuePipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-products-list',
    imports: [
        ProductItem,
        AddProductModal,
        FormsModule,
        CurrencyPipe,
        DatePipe,
        DecimalPipe,
        KeyValuePipe,
        LowerCasePipe,
        PercentPipe,
        SlicePipe,
        TitleCasePipe,
        UpperCasePipe
    ],
    templateUrl: './products-list.html',
    styleUrl: './products-list.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsList implements OnInit, OnChanges {
    private readonly productStore = inject(ProductStoreService);
    private readonly productRepostoryService = inject(PRODUCT_REPOSITORY_SERVICE);
    private readonly appStore = inject(AppStoreService);

    private router = inject(Router);
    private activatedRoute = inject(ActivatedRoute);

    protected productList = this.productStore.productList;
    protected isEditMode = this.appStore.isEditMode;

    public text = input();
    protected isAddModalOpen = signal(false);

    protected searchData = '';
    protected today = new Date();

    ngOnChanges(changes: SimpleChanges): void {
        // console.log({ changes })
    }

    ngOnInit(): void {
        this.productRepostoryService.loadCatalog();

        //console.log('ProductsList ngOnInit')
    }

    protected search(value: Event): void {
        //console.log({ value })
        this.productRepostoryService.search(this.searchData);
    }

    protected openModal(): void {
        this.isAddModalOpen.set(true);
    }

    protected closeModal(event: Omit<Product, 'id'> | void): void {
        this.isAddModalOpen.set(false);
        if (event) {
            this.productRepostoryService.addProduct(event)
        }
    }

    protected deleteProduct(id: string): void {
        this.productRepostoryService.deleteProduct(id);
    }

    protected onProductCardClick(id: string): void {
        //this.router.navigate(['products', `${id}`]);

        this.router.navigate(
            [`${id}`],
            { relativeTo: this.activatedRoute }
        );
        //this.router.navigateByUrl(`/products/${id}`);
    }
}
