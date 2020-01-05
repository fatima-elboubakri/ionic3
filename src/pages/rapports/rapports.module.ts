import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RapportsPage } from './rapports';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    RapportsPage,
  ],
  imports: [
    ChartsModule,
    IonicPageModule.forChild(RapportsPage),
  ],
})
export class RapportsPageModule {}
