import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';
import { FuncionaPage } from '../funciona/funciona';
import { SegurancaPage } from '../seguranca/seguranca';
import { PagamentoPage } from '../pagamento/pagamento';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToLoginPage(){
    this.navCtrl.push(LoginPage)
  }
  goToCadastroPage(){
    this.navCtrl.push(CadastroPage)
  }

  abrirFunciona(){
    this.navCtrl.push(FuncionaPage)
  }
  abrirSeguranca(){
    this.navCtrl.push(SegurancaPage)
  }
  abrirPagamento(){
    this.navCtrl.push(PagamentoPage)
  }

}
