import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../.././sidebar/sidebar-routes.config';
import { MenuType } from '../.././sidebar/sidebar.metadata';
import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    providers: [],
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle.menuType !== MenuType.BRAND);
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
    
    getTitle(){
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for(var item = 0; item < this.listTitles.length; item++){
            if(this.listTitles[item].path === titlee){
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
}
