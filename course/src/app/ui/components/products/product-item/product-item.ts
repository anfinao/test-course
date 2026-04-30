import { ChangeDetectionStrategy, Component, input, output, ViewEncapsulation } from '@angular/core';
import { PriceBadgeDirective } from '../../../directives/price.directive';
import { NumberGroupPipe } from '../../../pipes/number-group-pipe';
import { DiscountPricePipe } from '../../../pipes/discount.pipe';

@Component({
    selector: 'app-product-item',
    imports: [PriceBadgeDirective, NumberGroupPipe, DiscountPricePipe],
    templateUrl: './product-item.html',
    styleUrl: './product-item.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    // encapsulation: ViewEncapsulation.None
})
export class ProductItem {
    public title = input.required<string>();
    public price = input.required<number>();
    public description = input.required<string>();
    public delete = output<void>();

    protected onDelete(event: Event): void {
        event.stopPropagation();
        this.delete.emit();
    }
}
