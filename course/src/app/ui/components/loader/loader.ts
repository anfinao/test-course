import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-loader',
    imports: [],
    template: `<div class="loader"></div>`,
    styleUrl: './loader.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Loader { }
