import { CanDeactivateFn } from "@angular/router";
import { AdminPage } from "../../ui/pages/admin-page/admin-page";

export const canDeactivate: CanDeactivateFn<AdminPage> = (component) => {
    console.log(component)
    return confirm('Есть несохраненные изменения. Уйти?');
}
