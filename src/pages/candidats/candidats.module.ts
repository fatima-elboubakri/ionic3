import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidatsPage } from './candidats';

@NgModule({
  declarations: [
    CandidatsPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidatsPage),
  ],
})
export class CandidatsPageModule {}
