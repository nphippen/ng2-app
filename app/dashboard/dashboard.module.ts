import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(MODULE_ROUTES), 
        CommonModule,
        FormsModule,
        Ng2Bs3ModalModule
    ],
    declarations: [ MODULE_COMPONENTS ]
})

export class DashboardModule{}
