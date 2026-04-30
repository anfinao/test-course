import { AnimationCallbackEvent, ChangeDetectionStrategy, Component, DestroyRef, DoCheck, inject } from '@angular/core';
import { ProductStoreService } from '../../../../services/products/store.service';
import { CategoryItem } from "../category-item/category-item";
import { AppStoreService } from '../../../../services/app/app-store.service';
import { MatDialog } from '@angular/material/dialog';
import { CategoryForm } from '../../categories/category-form/category-form';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-category-list',
    imports: [CategoryItem],
    templateUrl: './category-list.html',
    styleUrl: './category-list.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryList implements DoCheck {
    private readonly destroyRef = inject(DestroyRef);
    private readonly store = inject(ProductStoreService);
    private readonly appStore = inject(AppStoreService);
    private readonly dialog = inject(MatDialog);

    protected categories = this.store.categoryList;
    protected isEditMode = this.appStore.isEditMode;

    ngDoCheck(): void {
        // console.log('CategoryList')
    }

    protected leavingFn(event: AnimationCallbackEvent): void {
        console.log(event);
        event.animationComplete();
    }

    protected openCategoryDialog(): void {
        const dialogRef = this.dialog.open(CategoryForm, {
            data: { titleExample: 'Создать' },
        });

        dialogRef.afterClosed()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(result => {
                console.log(result);
            });
    }
}
