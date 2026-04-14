import { ChangeDetectionStrategy, Component, ElementRef, input, OnChanges, output, SimpleChanges, viewChild } from '@angular/core';

@Component({
    selector: 'app-add-product-modal',
    imports: [],
    templateUrl: './add-product-modal.html',
    styleUrl: './add-product-modal.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductModal implements OnChanges {
    private dialog = viewChild<ElementRef>('addProductModal');
    public isOpen = input<boolean>(false);
    public close = output<void>();

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen']) {
            const isOpen = changes['isOpen'].currentValue;
            if (isOpen) {
                this.dialog()?.nativeElement.showModal();
            } else {
                this.dialog()?.nativeElement.close();
            }
        }
    }

    protected onClose(event?: Event): void {
        if (!event || event.target === this.dialog()?.nativeElement) {
            this.close.emit();
        }
    }
}
