import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ng2-bootstrap';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';


@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES), 
        CommonModule,
        FormsModule,
        ModalModule
    ],
    declarations: [ MODULE_COMPONENTS ]
})

export class DashboardModule{}
