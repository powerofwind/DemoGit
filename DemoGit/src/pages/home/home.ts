import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  summit(){
    this.navCtrl.push("AuroraPage");
  }
  Corp(){
    this.navCtrl.push("CorpPage");
  }

}
