import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpcaoUsuarioPage } from './opcao-usuario';

@NgModule({
  declarations: [
    OpcaoUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(OpcaoUsuarioPage),
  ],
})
export class OpcaoUsuarioPageModule {}
