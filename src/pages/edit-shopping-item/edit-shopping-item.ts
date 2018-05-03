import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

import { Item } from './../../models/item/item.model';
import { RestProvider } from '../../providers/rest/rest';
import { ToastService } from './../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
	item: Item;
  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private shopping: RestProvider,
  	private toast: ToastService,
    private loadingCtrl: LoadingController
  ) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item) {
    let loading = this.loadingCtrl.create({content:'Please wait, procesing....'});    
    loading.present();
  	this.shopping.updateUser(item)
  		.then(() => {
        loading.dismiss();
  			this.toast.show(`${item.name} saved!`);
  			this.navCtrl.setRoot('HomePage');
  		});
  }

  removeItem(item: Item) {
    let loading = this.loadingCtrl.create({content:'Please wait, procesing....'});    
    loading.present();
  	this.shopping.deleteUser(item)
  		.then(() => {
        loading.dismiss();
  			this.toast.show(`${item.name} deleted!`);
  			this.navCtrl.setRoot('HomePage');
  		});
  }

}
