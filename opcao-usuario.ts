import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroEmpresaPage } from '../cadastro-empresa/cadastro-empresa';
import { CadastroClientePage } from '../cadastro-cliente/cadastro-cliente';
import { HomePage } from '../home/home';

/**
 * Generated class for the OpcaoUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opcao-usuario',
  templateUrl: 'opcao-usuario.html',
})
export class OpcaoUsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
  }

  ionViewDidLoad()
   {
    console.log('ionViewDidLoad OpcaoUsuarioPage');
  }
  goToCadastroCliente()
  {
    this.navCtrl.push(CadastroClientePage)
  }
  goToCadastroEmpresa()
  {
    this.navCtrl.push(CadastroEmpresaPage)
  }

  goToHomePage()
  {
  this.navCtrl.push(HomePage)
  }

}
