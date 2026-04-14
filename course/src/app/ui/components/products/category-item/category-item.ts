import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, inject, input, OnInit } from '@angular/core';

@Component({
    selector: 'app-category-item',
    imports: [],
    templateUrl: './category-item.html',
    styleUrl: './category-item.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
})
export class CategoryItem implements DoCheck, OnInit {
    public name = input.required<string>();

    private cdr = inject(ChangeDetectorRef);
    ngOnInit(): void {
        this.cdr.detach()
    }
    ngDoCheck(): void {
        console.log('CategoryItem')
    }

    checkCheck() {
        console.log('--- CategoryItem Checked ---');
        return '';
    }
    protected onClick(): void {
        //console.log('click')
    }
}
