import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChokdeePage } from './chokdee';

@NgModule({
  declarations: [
    ChokdeePage,
  ],
  imports: [
    IonicPageModule.forChild(ChokdeePage),
  ],
})
export class ChokdeePageModule {}
