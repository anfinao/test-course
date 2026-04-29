import { DestroyRef, inject, Injectable, OnInit, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ActivatedRoute, NavigationEnd, NavigationStart, ResolveEnd, ResolveStart, Router } from "@angular/router";
import { filter, map, of, switchMap, tap } from "rxjs";

@Injectable()
export class RouteDataService {
    private readonly destroyRef = inject(DestroyRef);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly router = inject(Router);

    public loading = signal(false);

    public loadResourcesHandle(): void {
        this.router.events.pipe(
            filter(event =>
                event instanceof NavigationStart ||
                event instanceof ResolveStart ||
                event instanceof ResolveEnd ||
                event instanceof NavigationEnd
            )
        ).subscribe(event => {
            if (event instanceof ResolveStart) {
                this.loading.set(true);
            }

            if (event instanceof ResolveEnd) {
                this.loading.set(false);
            }
        });
    }

    public handleDataRouteChange(): void {
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            switchMap(() => {
                console.log(this.activatedRoute.firstChild)
                return this.activatedRoute.firstChild?.params ?? of(null);
            }),
            takeUntilDestroyed(this.destroyRef)
        ).subscribe((routeData: unknown) => {
            //console.log(routeData)
            console.log(routeData)
        })
    }
}
