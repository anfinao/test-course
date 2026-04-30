import { Injectable, signal } from "@angular/core";

@Injectable()
export class AppStoreService {
    public readonly isEditMode = signal(false);

    public toggleEditMode(): void {
        this.isEditMode.update(prev => !prev);
    }
}
