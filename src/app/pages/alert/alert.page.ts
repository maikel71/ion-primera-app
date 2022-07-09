import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';
  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  //Controller
  async controller() {
    const alert = await this.alertController.create({
      backdropDismiss:false,
      header: 'Alert',
      subHeader: 'Mensaje importante',
      message: '¡Esto es una alerta!',
      buttons: ['OK']
    });

    await alert.present();
  }

  //Buttons
  async buttons() {
    const alert = await this.alertController.create({
      backdropDismiss:false,
      header: 'Alert!',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => { 
            console.log("alerta confirmada");
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log("alerta cancelada");
          }
        }
        
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  //Text Inputs
  async textInputs() {
    const alert = await this.alertController.create({
      backdropDismiss:false,
      header: 'Please enter your info',
      buttons: [
      {
        text: 'OK',
        role: 'confirm',
        handler: (data:any) => { 
          console.log(data);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'rojo',
        handler: () => {
          console.log("alerta cancelada");
        }
      }],
      inputs: [
        {
          placeholder: 'Nombre'
        },
        {
          placeholder: 'Apodo (máximo 8 caracteres)',
          attributes: {
            maxlength: 8
          }
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100
        },
        {
          type: 'textarea',
          placeholder: 'Un poco sobre usted'
        }
      ]
    });

    await alert.present();
  }

  async radio() {
    const alert = await this.alertController.create({
      header: 'Seleccione su color favorito',
      buttons: ['OK'],
      inputs: [
        {
          label: 'Rojo',
          type: 'radio',
          value: 'red'
        },
        {
          label: 'Azul',
          type: 'radio',
          value: 'blue'
        },
        {
          label: 'Verde',
          type: 'radio',
          value: 'green'
        }
      ]
    });

    await alert.present();
  }
}
