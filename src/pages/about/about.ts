import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SecondPage } from '../second/second';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
message:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

navTOhomepage(){
  this.navCtrl.pop();
}
navTOsecondpage():void{

  this.navCtrl.push('SecondPage');
}
}
