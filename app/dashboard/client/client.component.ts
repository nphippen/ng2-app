import {Component, NgModule, ViewChild, OnInit,AfterViewInit,trigger,state,style,transition,animate,keyframes, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { Client } from './client';
import { ClientDataService } from './client-data.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@NgModule({
 imports: [
    FormsModule,
    BrowserModule
  ]
})

@Component({
    moduleId: module.id,
  selector: 'client-cmp',
  templateUrl: 'client.component.html',
  styles: [
        `.ng-valid[required] {
            border-left: 5px solid #5cb85c; /* green */
        }`,
        `.ng-invalid {
            border-left: 5px solid #d9534f; /* red */
        }`,
        `.red-text {
            color: #d9534f !important; /* red */
        }`
    ],
  providers: [ClientDataService],
  animations: [
        trigger('cardtable1', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1})),
                transition('void => *', [
                    style({opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform':'translate3D(0px, 150px, 0px)',
                        transform:'translate3D(0px, 150px, 0px)',
                    }),
                    animate('0.3s 0s ease-out')
                ])
        ])
    ]
})
export class ClientComponent implements OnInit {
  
  newClient: Client = new Client();
  clients: FirebaseListObservable<any>;
  
  constructor(private clientDataService: ClientDataService) {
       this.clients = clientDataService.clients;
    }

    @ViewChild('clientModal')
    modal: ModalComponent;

    closeClient() {
        this.addClient();
        this.modal.close();
    }

    open() {
        this.modal.open();
    }
    
  addClient() {
    this.clientDataService.addClient(this.newClient);
    this.newClient = new Client();
  }

  toggleClientComplete(key: string) {
    this.clientDataService.updateClient(key);
  }

  removeClient(key: string) {
    this.clientDataService.deleteClient(key);
  }

  
  onSubmit() {
    
  }

  ngOnInit() {
  }

}