import { ChangeDetectionStrategy, Component, inject, input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { FormsModule, ɵInternalFormsSharedModule } from "@angular/forms";
import { PRODUCT_REPOSITORY_SERVICE } from '../../../../services/products/product-repo.token';
import { ProductStoreService } from '../../../../services/products/store.service';
import { AddProductModal } from "../add-product-modal/add-product-modal";
import { ProductItem } from "../product-item/product-item";
import { Product } from '../../../../types';
import { ActivatedRoute, Router } from '@angular/router';

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

    private router = inject(Router);
    private activatedRoute = inject(ActivatedRoute);

    protected productList = this.productStore.productList;

    public text = input();
    protected isAddModalOpen = signal(false);

    protected searchData = '';

    ngOnChanges(changes: SimpleChanges): void {
        // console.log({ changes })
    }

    ngOnInit(): void {
        this.productRepostoryService.loadCatalog();

        console.log('ProductsList ngOnInit')
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
