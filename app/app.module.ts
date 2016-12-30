import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthMethods } from 'angularfire2';

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
        RouterModule.forRoot([]),
        AngularFireModule.initializeApp(
        {
          apiKey: "AIzaSyCAZMkJsN_mhq3QlIcGzdHEjJpwHqFtPp8",
          authDomain: "viking-market.firebaseapp.com",
          databaseURL: "https://viking-market.firebaseio.com",
          storageBucket: "viking-market.appspot.com",
        },
        {
          method: AuthMethods.Popup
        }
    )
    ],
    providers: [
        
    ],
    declarations: [ AppComponent, DashboardComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
