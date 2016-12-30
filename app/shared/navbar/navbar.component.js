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
var sidebar_routes_config_1 = require('../.././sidebar/sidebar-routes.config');
var sidebar_metadata_1 = require('../.././sidebar/sidebar.metadata');
var angularfire2_1 = require('angularfire2');
var NavbarComponent = (function () {
    function NavbarComponent(af) {
        var _this = this;
        this.af = af;
        this.isAuth = false;
        this.authColor = 'warn';
        this.user = {};
        this.af.auth.subscribe(function (user) { return _this._changeState(user); }, function (error) { return console.trace(error); });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = sidebar_routes_config_1.ROUTES.filter(function (listTitle) { return listTitle.menuType !== sidebar_metadata_1.MenuType.BRAND; });
    };
    NavbarComponent.prototype.login = function (from) {
        this.af.auth.login({
            provider: this._getProvider(from)
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.af.auth.logout();
    };
    NavbarComponent.prototype._changeState = function (user) {
        if (user === void 0) { user = null; }
        if (user) {
            this.isAuth = true;
            this.authColor = 'primary';
            this.user = this._getUserInfo(user);
            console.log('user state changed: ' + this.isAuth);
        }
        else {
            this.isAuth = false;
            this.authColor = 'warn';
            this.user = {};
            console.log('user state changed: ' + this.isAuth);
        }
    };
    NavbarComponent.prototype._getUserInfo = function (user) {
        if (!user) {
            return {};
        }
        var data = user.auth.providerData[0];
        return {
            name: data.displayName,
            avatar: data.photoURL,
            email: data.email,
            provider: data.providerId
        };
    };
    NavbarComponent.prototype._getProvider = function (from) {
        switch (from) {
            case 'twitter':
                return angularfire2_1.AuthProviders.Twitter;
            case 'facebook':
                return angularfire2_1.AuthProviders.Facebook;
            case 'github':
                return angularfire2_1.AuthProviders.Github;
            case 'google':
                return angularfire2_1.AuthProviders.Google;
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navbar-cmp',
            providers: [],
            templateUrl: 'navbar.component.html'
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map