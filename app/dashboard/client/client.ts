export class Client {
  
  name: string = '';
  active: boolean = true;
  website: string = '';
  instagramName: string = '';
  instagramId: string = '';
  facebookName: string = '';
  facebookId: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}