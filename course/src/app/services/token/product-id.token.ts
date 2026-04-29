import { InjectionToken, Signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";

export const PRODUCT_ID = new InjectionToken<Signal<string | null>>('[PRODUCT_ID]: Id продукта');

export const productIdFn = (activatedRoute: ActivatedRoute): Signal<string | null> => {
    return toSignal(activatedRoute.params
        .pipe(
            map(params => params['id'])
        ));
}
