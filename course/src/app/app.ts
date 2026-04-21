import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./ui/components/header/header";
import { Footer } from "./ui/components/footer/footer";
import { DEPS_TEMP_TOKEN } from './services/token/temp-deps.token';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Header, Footer],
    templateUrl: './app.html',
    styleUrl: './app.scss',
    providers: [
        { provide: DEPS_TEMP_TOKEN, useValue: 10 }
    ]
})
export class App {
    protected readonly title = signal('course');
}
