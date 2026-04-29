import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { MOCK_USER } from "../token/mock-user.token";

export const canActivate: CanActivateFn = () => {
    const user = inject(MOCK_USER);
    console.warn('canActivate')
    return user.role === 'admin';
}
