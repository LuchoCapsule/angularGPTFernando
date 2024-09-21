import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-pros-stream-page',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './prosStreamPage.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProsStreamPageComponent { }
