import { Injectable } from '@angular/core';
import {Client} from './client';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ClientDataService {

  clients: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.clients = af.database.list('/client');
  }

  updateClient(key: string) {
    this.clients.update(key, { complete: true });
  }
  deleteClient(key: string) {    
    this.clients.remove(key); 
  }
  deleteEverything() {
    this.clients.remove();
  }
  addClient(client: Client){
    this.clients.push(client);
  }


}