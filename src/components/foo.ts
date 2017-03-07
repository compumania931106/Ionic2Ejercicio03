import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CheckOut } from '../pages/checkout/checkout';

@Component ({
    selector: 'my-component',
    templateUrl: 'foo.html'
})

export class MyComponent {
    public data: any = {myToggle:true};
    public checkout:any = CheckOut;
    constructor(public navCtrl: NavController){

    }

    isClicked(val){
        console.log('Vegetariana: ' + val);
    }

    gotoCheckOutPage(type:string){
        this.navCtrl.push(CheckOut, {text:type});
  }
}