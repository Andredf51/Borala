import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {


  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
  constructor(public alerCtrl: AlertController) { }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Bem-Vindo Ao Borala!',
      message: 'Cadastro Realizado Com Sucesso!',
      buttons: ['Ok']
    });
    alert.present()
  }

}
