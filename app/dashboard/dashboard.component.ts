import { Component } from '@angular/core';
import { Auth } from '.././auth.service';

@Component({
    moduleId: module.id,
    selector: 'dashboard-cmp',
    providers: [ Auth ],
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent{
    constructor(private auth: Auth) {}
}
