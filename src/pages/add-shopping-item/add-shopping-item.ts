import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { Item } from './../../models/item/item.model';
import { RestProvider } from '../../providers/rest/rest';
import { ToastService } from './../../services/toast/toast.service';

/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

	item: Item = {
		name: '',
		quantity: undefined,
		price: undefined
	};

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private shopping: RestProvider,
    private toast: ToastService,
    private loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  addItem(item: Item){
    let loading = this.loadingCtrl.create({content:'Please wait, procesing....'});    
    loading.present();

  	this.shopping.addUser(item).then(ref =>{
      loading.dismiss();
      this.toast.show(`${item.name} added!`);
  		this.navCtrl.setRoot('HomePage');
  	});
  }
}
