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
  skw(){
    this.navCtrl.push("SakolwanPage");
  }
  Corp(){
    this.navCtrl.push("CorpPage");
  }
  panitan(){
    this.navCtrl.push("PanitanPage");
  }
}
