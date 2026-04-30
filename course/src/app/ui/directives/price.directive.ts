import { Directive, effect, ElementRef, inject, input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appPriceBadge]',
})
export class PriceBadgeDirective {
    private readonly elementRef = inject(ElementRef);
    private readonly renderer = inject(Renderer2);

    public price = input.required<number>();
    public oldPrice = input<number>();
    public withDiscount = input<boolean>();

    constructor() {
        this.onPriceEffect();
    }

    private onPriceEffect(): void {
        effect(() => {
            const currentPrice = this.price();
            const hasDiscount = this.withDiscount();
            const oldPriceVal = this.oldPrice();

            const elem: HTMLElement = this.elementRef.nativeElement;
            // 1. Очистка старых классов перед обновлением (опционально)
            this.clearClasses();

            // 2. Логика для дорогого товара
            if (currentPrice > 500) {
                this.renderer.addClass(this.elementRef.nativeElement, 'price-high');
            } else {
                this.renderer.addClass(this.elementRef.nativeElement, 'price-low');
            }

            // 3. Логика скидки
            if (hasDiscount || (oldPriceVal && oldPriceVal > currentPrice)) {
                this.renderer.addClass(this.elementRef.nativeElement, 'price-discount');
            }

            // 4. Прямая манипуляция текстом (если нужно выводить символ валюты)
            let text = elem.innerText + `₽`;
            this.elementRef.nativeElement.innerText = text;

            if (oldPriceVal && hasDiscount) {
                const oldPriceSpanElem = document.createElement('span');
                this.renderer.addClass(oldPriceSpanElem, 'price-old');
                oldPriceSpanElem.innerText = `(${oldPriceVal})`;
                this.renderer.appendChild(elem, oldPriceSpanElem)
            }

        })
    }

    private clearClasses(): void {
        const classes = ['price-high', 'price-low', 'price-discount'];
        classes.forEach(cls => this.renderer.removeClass(this.elementRef.nativeElement, cls));
    }
}
