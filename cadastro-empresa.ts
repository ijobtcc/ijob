import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { OpcaoUsuarioPage } from '../opcao-usuario/opcao-usuario';

/**
 * Generated class for the CadastroEmpresaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-empresa',
  templateUrl: 'cadastro-empresa.html',
})
export class CadastroEmpresaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad CadastroEmpresaPage');
  }

  goToHomePage()
  {
    this.navCtrl.push(HomePage)
  }

  goToOpcaoUsuario()
  {
    this.navCtrl.push(OpcaoUsuarioPage)
  }
}
