import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
    selector: 'app-product-item',
    imports: [],
    templateUrl: './product-item.html',
    styleUrl: './product-item.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItem {
    public title = input.required<string>();
    public price = input.required<number>();
    public description = input.required<string>();
    public delete = output<void>();

    protected onDelete(): void {
        this.delete.emit();
    }
}
