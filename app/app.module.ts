import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AngularFireModule } from 'angularfire2';
import { ModalModule } from 'ng2-bootstrap';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCAZMkJsN_mhq3QlIcGzdHEjJpwHqFtPp8",
    authDomain: "viking-market.firebaseapp.com",
    databaseURL: "https://viking-market.firebaseio.com",
    storageBucket: "viking-market.appspot.com"
};

@NgModule({
    imports:      [
        BrowserModule,
        DashboardModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        ModalModule,
        RouterModule.forRoot([]),
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    providers: [
        AUTH_PROVIDERS
    ],
    declarations: [ AppComponent, DashboardComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
