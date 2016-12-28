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
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var ng2_bootstrap_1 = require("ng2-bootstrap");
var client_1 = require('./client');
var client_data_service_1 = require('./client-data.service');
var ClientComponent = (function () {
    function ClientComponent(clientDataService) {
        this.clientDataService = clientDataService;
        this.newClient = new client_1.Client();
        this.clients = clientDataService.clients;
    }
    ClientComponent.prototype.addClient = function () {
        this.clientDataService.addClient(this.newClient);
        this.newClient = new client_1.Client();
    };
    ClientComponent.prototype.toggleClientComplete = function (key) {
        this.clientDataService.updateClient(key);
    };
    ClientComponent.prototype.removeClient = function (key) {
        this.clientDataService.deleteClient(key);
    };
    ClientComponent.prototype.ngOnInit = function () {
    };
    ClientComponent = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                platform_browser_1.BrowserModule
            ]
        }),
        core_1.Component({
            moduleId: module.id,
            selector: 'client-cmp',
            templateUrl: 'client.component.html',
            styleUrls: [],
            providers: [client_data_service_1.ClientDataService],
            directives: [ng2_bootstrap_1.ModalDirective],
            animations: [
                core_1.trigger('cardtable1', [
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
                        core_1.animate('0.3s 0s ease-out')
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [client_data_service_1.ClientDataService])
    ], ClientComponent);
    return ClientComponent;
}());
exports.ClientComponent = ClientComponent;
//# sourceMappingURL=client.component.js.map