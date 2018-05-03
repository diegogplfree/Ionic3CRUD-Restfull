import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	shoppingList:  any;

  constructor(
  	public navCtrl: NavController,
  	private shopping: RestProvider
  ) {
  	  this.shopping.getUsers().then((val) => {
        this.shoppingList = val;
      });
  }
}
