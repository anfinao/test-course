import { Component, input } from '@angular/core';

@Component({
    selector: 'app-main-page',
    imports: [],
    templateUrl: './main-page.html',
    styleUrl: './main-page.scss',
})
export class MainPage {
    public hello = input<string>();
}
