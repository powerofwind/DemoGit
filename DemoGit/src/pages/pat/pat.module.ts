import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatPage } from './pat';

@NgModule({
  declarations: [
    PatPage,
  ],
  imports: [
    IonicPageModule.forChild(PatPage),
  ],
})
export class PatPageModule {}
