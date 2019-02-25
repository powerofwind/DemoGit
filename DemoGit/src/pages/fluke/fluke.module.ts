import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlukePage } from './fluke';

@NgModule({
  declarations: [
    FlukePage,
  ],
  imports: [
    IonicPageModule.forChild(FlukePage),
  ],
})
export class FlukePageModule {}
