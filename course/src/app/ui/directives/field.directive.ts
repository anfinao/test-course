import { Directive, ElementRef, HostListener, inject } from "@angular/core";

@Directive({
    selector: '[myField]'
})
export class CustomFieldDirective {
    private readonly elementRef = inject(ElementRef);


    constructor() {
        //this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('input', ['$event'])
    onInput(event: Event): void {
        console.log({ event })
    }
}
