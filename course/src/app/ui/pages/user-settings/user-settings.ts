import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  imports: [],
  templateUrl: './user-settings.html',
  styleUrl: './user-settings.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSettings { }
