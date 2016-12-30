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
var angularfire2_1 = require('angularfire2');
var UserComponent = (function () {
    function UserComponent(af) {
        var _this = this;
        this.af = af;
        this.isAuth = false;
        this.authColor = 'warn';
        this.user = {};
        this.af.auth.subscribe(function (user) { return _this._changeState(user); }, function (error) { return console.trace(error); });
    }
    UserComponent.prototype.login = function (from) {
        this.af.auth.login({
            provider: this._getProvider(from)
        });
    };
    UserComponent.prototype.logout = function () {
        this.af.auth.logout();
    };
    UserComponent.prototype._changeState = function (user) {
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
    UserComponent.prototype._getUserInfo = function (user) {
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
    UserComponent.prototype._getProvider = function (from) {
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
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-cmp',
            providers: [],
            templateUrl: 'user.component.html',
            animations: [
                core_1.trigger('carduserprofile', [
                    core_1.state('*', core_1.style({
                        '-ms-transform': 'translate3D(0px, 0px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                        '-moz-transform': 'translate3D(0px, 0px, 0px)',
                        '-o-transform': 'translate3D(0px, 0px, 0px)',
                        transform: 'translate3D(0px, 0px, 0px)',
                        opacity: 1
                    })),
                    core_1.transition('void => *', [
                        core_1.style({ opacity: 0,
                            '-ms-transform': 'translate3D(0px, 150px, 0px)',
                            '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                            '-moz-transform': 'translate3D(0px, 150px, 0px)',
                            '-o-transform': 'translate3D(0px, 150px, 0px)',
                            transform: 'translate3D(0px, 150px, 0px)',
                        }),
                        core_1.animate('0.3s 0s ease-out'),
                    ])
                ]),
                core_1.trigger('cardprofile', [
                    core_1.state('*', core_1.style({
                        '-ms-transform': 'translate3D(0px, 0px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                        '-moz-transform': 'translate3D(0px, 0px, 0px)',
                        '-o-transform': 'translate3D(0px, 0px, 0px)',
                        transform: 'translate3D(0px, 0px, 0px)',
                        opacity: 1 })),
                    core_1.transition('void => *', [
                        core_1.style({ opacity: 0,
                            '-ms-transform': 'translate3D(0px, 150px, 0px)',
                            '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                            '-moz-transform': 'translate3D(0px, 150px, 0px)',
                            '-o-transform': 'translate3D(0px, 150px, 0px)',
                            transform: 'translate3D(0px, 150px, 0px)',
                        }),
                        core_1.animate('0.3s 0.25s ease-out')
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map