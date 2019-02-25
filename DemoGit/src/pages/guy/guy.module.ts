import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuyPage } from './guy';

@NgModule({
  declarations: [
    GuyPage,
  ],
  imports: [
    IonicPageModule.forChild(GuyPage),
  ],
})
export class GuyPageModule {}
