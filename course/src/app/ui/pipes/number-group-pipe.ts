import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
    name: 'appNumberGroup',
})
export class NumberGroupPipe implements PipeTransform {
    transform(value: number | string | null | undefined, locale: string = 'ru-RU'): string {
        console.log({ value })
        if (value == null || isNaN(Number(value))) return '';

        return new Intl.NumberFormat(locale).format(Number(value));
    }
}
