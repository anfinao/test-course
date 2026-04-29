import { ChangeDetectionStrategy, Component, ElementRef, inject, input, OnChanges, output, SimpleChanges, viewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PRODUCT_REPOSITORY_SERVICE } from '../../../../services/products/product-repo.token';
import { ProductStoreService } from '../../../../services/products/store.service';
import { Product } from '../../../../types';

type CharacteristicForm = FormGroup<{
    characteristic: FormControl<string>;
    value: FormControl<string>;
}>;

@Component({
    selector: 'app-add-product-modal',
    imports: [ReactiveFormsModule],
    templateUrl: './add-product-modal.html',
    styleUrl: './add-product-modal.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductModal implements OnChanges {
    private productsService = inject(PRODUCT_REPOSITORY_SERVICE);
    private storeService = inject(ProductStoreService);
    private dialog = viewChild<ElementRef>('addProductModal');
    public isOpen = input<boolean>(false);
    public close = output<Omit<Product, 'id'> | void>();

    protected form = new FormGroup({
        name: new FormControl(null, [Validators.required]),
        description: new FormControl(null, [Validators.required]),
        price: new FormControl<number>(0, { nonNullable: true }),
        creationDate: new FormControl(new Date(), { nonNullable: true }),
        characteristics: new FormArray<CharacteristicForm>([]),
    });

    get characteristics(): FormArray {
        return this.form.get('characteristics') as FormArray;
    }

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

    protected addCharacteristic(): void {
        this.characteristics.push(
            new FormGroup({
                characteristic: new FormControl('', [Validators.required]),
                value: new FormControl('', [Validators.required]),
            })
        );
    }

    protected removeCharacteristic(index: number): void {
        this.characteristics.removeAt(index);
    }

    protected onSubmit(event: Event): void {
        event.preventDefault();
        if (this.form.invalid) {
            return;
        }

        const data = this.form.getRawValue();
        this.close.emit({
            name: String(data.name),
            description: String(data.description),
            price: data.price,
            categoryId: this.storeService.selectedCategoryId()
        });
    }

    protected onReset(event: Event): void {
        event.preventDefault();
        console.log(this.form.get('price'));
        this.form.reset({
            price: 200,
        });
        this.close.emit();
    }
}
