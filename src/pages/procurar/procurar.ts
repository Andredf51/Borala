import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ProcurarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-procurar',
  templateUrl: 'procurar.html',
})
export class ProcurarPage {

  /*constructor(public navCtrl: NavController, public navParams: NavParams) {
  }*/
  constructor(public alerCtrl: AlertController) { }

  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Pode Confirmar a carona?',
      message: 'Você está de acordo com o destino e o horário de saída?',
      buttons: [
        {
          text: 'Discordo',
          handler: () => {
            console.log('Discordo clicked');
          }
        },
        {
          text: 'Concordo',
          handler: () => {
            console.log('Concordo clicked');
          }
        }
      ]
    });
    confirm.present()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcurarPage');
  }
  public event = {
    timeStarts: '00:00',
  }

}
