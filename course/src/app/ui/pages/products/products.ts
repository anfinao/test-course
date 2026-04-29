import { AfterViewInit, ChangeDetectionStrategy, Component, inject, InjectionToken, OnInit, Optional } from '@angular/core';
import { CategoryList } from "../../components/products/category-list/category-list";
import { ProductsList } from '../../components/products/products-list/products-list';
import { DEPS_TEMP_TOKEN } from '../../../services/token/temp-deps.token';
import { ProductStoreService } from '../../../services/products/store.service';
import { PRODUCT_REPOSITORY_SERVICE } from '../../../services/products/product-repo.token';
import { ProductRepositoryService } from '../../../services/products/product-repository.service';
import { RouterOutlet } from '@angular/router';

const TEMP_TOKEN = new InjectionToken<number>('Temp');

@Component({
    selector: 'app-products',
    imports: [RouterOutlet],
    templateUrl: './products.html',
    styleUrl: './products.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        ProductStoreService,
        { provide: PRODUCT_REPOSITORY_SERVICE, useClass: ProductRepositoryService }
    ]
})
export class Products implements AfterViewInit {

    ngAfterViewInit(): void {
        console.log('Products ngAfterViewInit')
    }
}
