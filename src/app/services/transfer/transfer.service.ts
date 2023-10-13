import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }

  private componentData: any;

  setData(data: any) {
    this.componentData = data;
  }

  getData() {
    return this.componentData;
  }
}
