import { Directive, Input, input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appCustomIf]',
})
export class CustomIfDirective {
    private hasView = false;

    constructor(
        private templateRef: TemplateRef<any>, // Ссылка на шаблон
        private viewContainer: ViewContainerRef // Контейнер, куда рендерить
    ) { }

    @Input() set appCustomIf(condition: boolean) {
        if (condition && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef); // Создать элемент
            this.hasView = true;
        } else if (!condition && this.hasView) {
            this.viewContainer.clear(); // Удалить элемент
            this.hasView = false;
        }
    }
}
