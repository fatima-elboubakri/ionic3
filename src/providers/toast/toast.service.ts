import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular";

@Injectable()
export class ToastService{
   
  constructor(private toastCtrl: ToastController) {}
    
  presentToast(msg:string) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'top'
      });
      toast.onDidDismiss(() => {
        console.log('Annuler');
      });
      toast.present();
    }
    }