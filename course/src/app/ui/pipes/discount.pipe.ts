import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'discountPrice',
    standalone: true,
})
export class DiscountPricePipe implements PipeTransform {
    transform(oldPrice: number | null | undefined, discountPercent: number | null | undefined): number {
        if (oldPrice == null || discountPercent == null) return 0;

        const price = Number(oldPrice);
        const discount = Number(discountPercent);

        if (isNaN(price) || isNaN(discount)) return 0;

        const newPrice = price - (price * discount) / 100;

        console.log({ newPrice })
        return Math.round(newPrice);
    }
}
