import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {

  username: string = '';

  constructor(public toastController: ToastController) {}

  async resetPassword() {
  
    const toast = await this.toastController.create({
      message: 'Instrucciones enviadas a tu correo electrónico.',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
