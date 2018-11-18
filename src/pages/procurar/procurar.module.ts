import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProcurarPage } from './procurar';

@NgModule({
  declarations: [
    ProcurarPage,
  ],
  imports: [
    IonicPageModule.forChild(ProcurarPage),
  ],
})
export class ProcurarPageModule {}
