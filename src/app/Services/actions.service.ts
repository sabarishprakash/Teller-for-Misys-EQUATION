import { Injectable } from '@angular/core';
import { actions } from '../Models/actions.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  actionListChange = new Subject<actions[]>();

  constructor() { }

  private actionList: actions[] = [
    new actions(1,'PMC','Post Manual Charges'), 
    new actions(2,'ASI','Add Sundry Item'),
    new actions(3,'YCT','Debit Card Tracking'),
    new actions(4,'ANC','Add New Customer'),
    new actions(5,'OCA','Open Customer Account'),
    new actions(6,'AB ','View Account Balance'),
    new actions(7,'AE ','View Account Details'),
    new actions(8,'AS ','View Account Summary'),
    new actions(9,'CAA','Add Customer Address'),
    new actions(10,'ITA','View Account Details')
  ];

  getActions() {
    return this.actionList.slice();
  }

  performSearch(searchinput: string) {
      //this.actionListChange.next(this.actionList.filter(e => e.mnemonic === searchinput));
      this.actionListChange.next(this.actionList.filter(e => e.description.includes(searchinput)));
  }

  getHeading(key: number): string{
    const action =  this.actionList.find(e => e.key === key);
    return action.description;
  }
}
