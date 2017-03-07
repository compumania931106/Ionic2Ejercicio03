import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MyComponent } from '../../components/foo';

import { CheckOut } from '../checkout/checkout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public checkout:any = CheckOut;

  constructor(public navCtrl: NavController) {
    
  }

  gotoCheckOutPage(){
    this.navCtrl.push(CheckOut, {text: 'Soy una cadena enviada desde push :D'});
  }

}
