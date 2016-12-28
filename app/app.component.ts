import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { Auth } from './auth.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'my-app',
    providers: [ Auth ],
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit{
    
    
    ngOnInit(){
        $.getScript('../assets/js/light-bootstrap-dashboard.js');
    }
    
    
    
    constructor(private auth: Auth ) {
       
    }
    
   
    
    public isMaps(path){
        if(path == window.location.pathname){
            return true;
        }
        else {
            return false;
        }
    }
}
