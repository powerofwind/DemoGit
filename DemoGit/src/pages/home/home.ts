import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DemopoppyPage } from '../demopoppy/demopoppy';

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
  skw(){
    this.navCtrl.push("SakolwanPage");
  }
  Corp(){
    this.navCtrl.push("CorpPage")};
  poppy(){
    this.navCtrl.push("DemopoppyPage");
  }

}
