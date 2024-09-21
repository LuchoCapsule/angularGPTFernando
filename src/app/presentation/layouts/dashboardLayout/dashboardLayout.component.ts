import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SideBarMenuIItemsComponent } from '../../components/sideBarMenuIItems/sideBarMenuIItems.component';
import { routes } from '../../../app.routes';

@Component({
    selector: 'app-dashboard-layout',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule, // Added this module to render the childrem path in the browser bar
        SideBarMenuIItemsComponent
    ],
    templateUrl: './dashboardLayout.component.html',
    styleUrl: './dashboardLayout.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {
    // Get routes from app.routes.ts to show in the sidebar menu.
    public routes = routes[0].children?.filter((route) => route.data);

 }
