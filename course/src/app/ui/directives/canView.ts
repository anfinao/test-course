import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { MOCK_USER } from '../../services/token/mock-user.token';

@Directive({
    selector: '[appCanView]',
})
export class CanView {
    private readonly templateRef = inject(TemplateRef);
    private readonly viewContainerRef = inject(ViewContainerRef);
    private readonly user = inject(MOCK_USER);

    @Input() set appCanView(roles: string[]) {
        if (roles.includes(this.user.role)) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainerRef.clear();
        }
    }
}
