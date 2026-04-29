import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./ui/components/header/header";
import { Footer } from "./ui/components/footer/footer";
import { DEPS_TEMP_TOKEN } from './services/token/temp-deps.token';
import { RouteDataService } from './services/app/route-data.service';
import { Loader } from "./ui/components/loader/loader";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Header, Footer, Loader],
    templateUrl: './app.html',
    styleUrl: './app.scss',
    providers: [
        { provide: DEPS_TEMP_TOKEN, useValue: 10 }
    ]
})
export class App implements OnInit {
    protected readonly title = signal('course');
    private readonly routerDataChangeService = inject(RouteDataService);
    protected readonly loading = this.routerDataChangeService.loading;

    public ngOnInit(): void {
        this.routerDataChangeService.handleDataRouteChange();
        this.routerDataChangeService.loadResourcesHandle();
    }
}
