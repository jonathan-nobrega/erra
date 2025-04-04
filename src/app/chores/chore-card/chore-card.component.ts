import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';


@Component({
  selector: 'app-chore-card',
  templateUrl: './chore-card.component.html',
  styleUrls: ['./chore-card.component.scss'],
  standalone: false
})
export class ChoreCardComponent implements OnInit {

  @Input() title: string
  @Input() notes: string
  @Input() frequency: string
  @Input() startDate: string
  @Input() assignee: string
  @Input() lastCheckIn: string

  @Output() actionSheetEvent = new EventEmitter<string>()
  @Output() toastEvent = new EventEmitter<string>()

  constructor(private toastController: ToastController) { }

  ngOnInit() { }

  openActionSheet() {
    this.actionSheetEvent.emit(this.title)
  }

  // I still need to implement different ion-chip states for 'on-track', 'late', and 'empty'

  checkFrequencyStatus() {
    switch (this.frequency) {
      case 'once-day': return this.calculateFrequencyStatus(1)
      case 'once-week': return this.calculateFrequencyStatus(7)
      case 'every-other-week': return this.calculateFrequencyStatus(14)
      case 'once-month': return this. calculateFrequencyStatus(30)
      default: return 'empty'
    }
  }
  
  calculateFrequencyStatus(interval: number) {
    if (!this.lastCheckIn) return 'empty'

    const maxInterval = Date.now() - (interval * 24 * 60 * 60 * 1000)

    if (maxInterval > Date.parse(this.lastCheckIn)) return 'late'
    else return 'on-track'
  }

}