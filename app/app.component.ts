import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
    selector: 'my-app',
    providers: [],
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit {

    ngOnInit() {
        $.getScript('../assets/js/light-bootstrap-dashboard.js');
    }

    isAuth = false;
    authColor = 'warn';
    user = {};

    constructor(public af: AngularFire) {
        this.af.auth.subscribe(
            user => this._changeState(user),
            error => console.trace(error)
        );
    }

    login(from: string) {
        this.af.auth.login({
            provider: this._getProvider(from)
        });
    }
    
    logout() {
        this.af.auth.logout();
    }

    private _changeState(user: any = null) {
        if (user) {
            this.isAuth = true;
            this.authColor = 'primary';
            this.user = this._getUserInfo(user)
            console.log('user state changed: ' + this.isAuth)
        }
        else {
            this.isAuth = false;
            this.authColor = 'warn';
            this.user = {};
            console.log('user state changed: ' + this.isAuth)
        }
    }

    private _getUserInfo(user: any): any {
        if (!user) {
            return {};
        }
        let data = user.auth.providerData[0];
        return {
            name: data.displayName,
            avatar: data.photoURL,
            email: data.email,
            provider: data.providerId
        };
    }

    private _getProvider(from: string) {
        switch (from) {
            case 'twitter':
                return AuthProviders.Twitter;
            case 'facebook':
                return AuthProviders.Facebook;
            case 'github':
                return AuthProviders.Github;
            case 'google':
                return AuthProviders.Google;
        }
    }
   

    public isMaps(path) {
        if (path == window.location.pathname) {
            return true;
        }
        else {
            return false;
        }
    }
}
