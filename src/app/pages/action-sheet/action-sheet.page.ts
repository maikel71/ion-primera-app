import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  onClick(){
    this.presentActionSheet()
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albumes',
      /*aqui el backdropDimiss es 
      cuando no queremos cuando tocamos
      afuera no se cierre si no para 
      cuando aplastamos otra opcion*/
      backdropDismiss:false,
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash-outline',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        cssClass:'rojo',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share-outline',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle-outline',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close-outline',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resuelto con rol y datos', role, data);
  }

}
