import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaePage } from './tae';

@NgModule({
  declarations: [
    TaePage,
  ],
  imports: [
    IonicPageModule.forChild(TaePage),
  ],
})
export class TaePageModule {}
