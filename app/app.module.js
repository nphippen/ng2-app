"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var angular2_jwt_1 = require('angular2-jwt');
var angularfire2_1 = require('angularfire2');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var dashboard_module_1 = require('./dashboard/dashboard.module');
var sidebar_module_1 = require('./sidebar/sidebar.module');
var footer_module_1 = require('./shared/footer/footer.module');
var navbar_module_1 = require('./shared/navbar/navbar.module');
// Must export the config
exports.firebaseConfig = {
    apiKey: "AIzaSyCAZMkJsN_mhq3QlIcGzdHEjJpwHqFtPp8",
    authDomain: "viking-market.firebaseapp.com",
    databaseURL: "https://viking-market.firebaseio.com",
    storageBucket: "viking-market.appspot.com"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                dashboard_module_1.DashboardModule,
                sidebar_module_1.SidebarModule,
                navbar_module_1.NavbarModule,
                footer_module_1.FooterModule,
                ng2_bootstrap_1.ModalModule,
                router_1.RouterModule.forRoot([]),
                angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig)
            ],
            providers: [
                angular2_jwt_1.AUTH_PROVIDERS
            ],
            declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map