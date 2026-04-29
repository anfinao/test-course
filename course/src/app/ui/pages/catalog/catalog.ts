import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryList } from "../../components/products/category-list/category-list";
import { ProductsList } from "../../components/products/products-list/products-list";

@Component({
    selector: 'app-catalog',
    imports: [CategoryList, ProductsList],
    templateUrl: './catalog.html',
    styleUrl: './catalog.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Catalog { }
