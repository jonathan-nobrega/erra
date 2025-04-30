import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { List } from '../list.interface';
import { selectSelectedList } from '../state/lists.selectors';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss'],
  standalone: false
})
export class ListDetailsComponent implements OnInit {

  list$: Observable<List | undefined> = this.store.select(selectSelectedList)

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController
  ) { }

  choresCount: number = 0
  choresCompleted: number = 0
  isActionSheetOpen = false
  isModalOpen = true


  ngOnInit(): void {
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

  openInformationModal() {
    this.isModalOpen = true
  }

  closeInformationModal() {
    this.isModalOpen = false
  }
}
