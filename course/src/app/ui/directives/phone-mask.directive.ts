import { Directive, ElementRef, HostListener, inject } from "@angular/core";

@Directive({
    selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {
    private readonly elementRef = inject(ElementRef);

    @HostListener('input', ['$event'])
    onInput(event: Event): void {
        const input = this.elementRef.nativeElement as HTMLInputElement;

        // Оставляем только цифры
        let value = input.value.replace(/\D/g, '');

        // Если первая цифра 7 или 8, убираем её для единообразия
        if (value.startsWith('7') || value.startsWith('8')) {
            value = value.substring(1);
        }

        // Ограничиваем длину (10 цифр без учета кода страны)
        value = value.substring(0, 10);

        // Форматируем строку
        let formattedValue = '+7 ';

        if (value.length > 0) {
            formattedValue += '(' + value.substring(0, 3);
        }
        if (value.length >= 4) {
            formattedValue += ') ' + value.substring(3, 6);
        }
        if (value.length >= 7) {
            formattedValue += '-' + value.substring(6, 8);
        }
        if (value.length >= 9) {
            formattedValue += '-' + value.substring(8, 10);
        }

        // Устанавливаем итоговое значение в поле
        input.value = value.length > 0 ? formattedValue : '';
    }

    /** Запрещаем стирать префикс "+7 " через Backspace в пустом поле */
    @HostListener('keydown.backspace', ['$event'])
    onBackspace(event: Event) {
        const input = this.elementRef.nativeElement as HTMLInputElement;
        if (input.value.length <= 4) {
            input.value = '';
        }
    }
}
