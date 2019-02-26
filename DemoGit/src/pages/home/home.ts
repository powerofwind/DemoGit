import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DemopoppyPage } from '../demopoppy/demopoppy';
import { BallPage } from '../ball/ball';

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
  buttonsummit(){
    this.navCtrl.push("FlukePage");
  }
  

  Corp(){
    this.navCtrl.push("CorpPage")
  }
  poppy(){
    this.navCtrl.push(DemopoppyPage)
  }
  panitan(){
    this.navCtrl.push("PanitanPage");
  }

  guy(){
    this.navCtrl.push("GuyPage");
  }

  chokdee(){
    this.navCtrl.push("ChokdeePage");
  }


  onsummit(){
    this.navCtrl.push("PatPage");
    
  }
  ArlengOK(){
    this.navCtrl.push("ArlengPage");
    
  }
  taeP(){
    this.navCtrl.push("TaePage")
  }
  ball(){
    this.navCtrl.push(BallPage)
  }
}
