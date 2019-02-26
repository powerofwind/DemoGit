import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BallPage } from './ball';

@NgModule({
  declarations: [
    BallPage,
  ],
  imports: [
    IonicPageModule.forChild(BallPage),
  ],
})
export class BallPageModule {}
