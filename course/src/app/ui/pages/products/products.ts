import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryList } from "../../components/products/category-list/category-list";
import { ProductsList } from '../../components/products/products-list/products-list';

@Component({
    selector: 'app-products',
    imports: [ProductsList, CategoryList],
    templateUrl: './products.html',
    styleUrl: './products.scss',
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {

}
