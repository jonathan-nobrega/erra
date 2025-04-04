import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { Chore } from 'src/app/chores/chore.interface';
import data from '../../../stubdata/lists.json';
import { List } from '../list.interface';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss'],
  standalone: false
})
export class ListDetailsComponent implements OnInit {

  listData: List[] = data
  listId: number
  listDetails: List | undefined
  choresList: Chore[] | []
  choresCount: number = 0
  choresCompleted: number = 0
  isActionSheetOpen = false

  constructor(
    private route: ActivatedRoute,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController
  ) { }

  ngOnInit(): void {
    this.listId = parseInt(this.route.snapshot.paramMap.get('id')!)

    this.listDetails = this.listData.find(a => a.id === this.listId)

    this.choresList = this.listDetails?.chores || []

    this.choresCount = this.choresList.length

    this.choresCompleted = Math.round(0.2 * this.choresCount)
  }

  async handleActionSheet(event: string) {
    const actionSheetButtons = await this.actionSheetController.create({
      header: 'Actions',
      buttons: [
        {
          text: `Check in ${event}`,
          handler: () => {
            this.presentToast(`🎉 Check in for '${event}'`)
          }
        },
        {
          text: 'Undo last check in',
          handler: () => {
            this.presentToast(`↩️ Erased last check in for '${event}'`)
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ]
    })
    await actionSheetButtons.present()
  }

  async presentToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 1500,
      position: 'top'
    })

    await toast.present()
  }
  
}
