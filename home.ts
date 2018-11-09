import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroClientePage } from '../cadastro-cliente/cadastro-cliente';
import { MenuPage } from '../menu/menu';
import { OpcaoUsuarioPage } from '../opcao-usuario/opcao-usuario';



@Component
({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {

  }
  ionViewDidLoad() 
  {
  	console.log('ionViewDidLoad HomePage');
  }
  goToClientePage()
  {
  this.navCtrl.push(CadastroClientePage)
  }
  goToMenuPage()
  {
  this.navCtrl.push(MenuPage)
  }
  
  goToOpcaoUsuarioPage()
  {
    this.navCtrl.push(OpcaoUsuarioPage)
  }

}
