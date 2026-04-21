import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, DoCheck, effect, inject, input, NgZone, OnInit, signal } from '@angular/core';

@Component({
    selector: 'app-category-item',
    imports: [],
    templateUrl: './category-item.html',
    styleUrl: './category-item.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
})
export class CategoryItem implements DoCheck, OnInit {
    public name = input.required<string>();
    protected test = computed(() => this.name());

    private cdr = inject(ChangeDetectorRef);

    constructor() {
        effect(() => {
            // console.log(this.name())
        });
    }

    ngOnInit(): void {
        this.cdr.detach();
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
        this.cdr.reattach();
        this.cdr.markForCheck();
    }
}
