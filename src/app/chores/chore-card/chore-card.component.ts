import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';


@Component({
  selector: 'app-chore-card',
  templateUrl: './chore-card.component.html',
  styleUrls: ['./chore-card.component.scss'],
  standalone: false
})
export class ChoreCardComponent  implements OnInit {

  @Input() title: string
  @Input() notes: string
  @Input() frequency: string
  @Input() startDate: string
  @Input() assignee: string

  constructor(private toastController: ToastController) { }

  ngOnInit() {}

  async presentToast(text: string) {
    const toast = await this.toastController.create({
      message: `Check in for ${text}`,
      duration: 1500,
      position: 'top'
    })

    await toast.present()
  }

}
