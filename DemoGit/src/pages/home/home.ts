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
<<<<<<< HEAD
  buttonsummit(){
    this.navCtrl.push("FlukePage");
  }
  

=======
  Corp(){
    this.navCtrl.push("CorpPage");
  }
  panitan(){
    this.navCtrl.push("PanitanPage");
  }
>>>>>>> 1df42d3615e09e309f34f2270f7ab1216b3c7127
}
