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

  frequencyStatus: 'empty' | 'on-track' | 'late'

  constructor(private toastController: ToastController) { }

  ngOnInit() {
    this.lastCheckIn = this.lastCheckIn ?? this.startDate
    console.log(this.lastCheckIn)
    this.frequencyStatus = this.checkFrequencyStatus(this.frequency, this.lastCheckIn)
  }

  openActionSheet() {
    this.actionSheetEvent.emit(this.title)
  }

  // I still need to implement different ion-chip states for 'on-track', 'late', and 'empty'

  checkFrequencyStatus(frequency: string, lastCheckIn: string) {
    let frequeyncyIntervalDays;

    if (frequency == 'once-day') frequeyncyIntervalDays = 1;
    else if (frequency == 'once-week') frequeyncyIntervalDays = 7;
    else if (frequency == 'every-other-week') frequeyncyIntervalDays = 14;
    else if (frequency == 'once-month') frequeyncyIntervalDays = 30;
    else return 'empty';

    return this.calculateFrequencyStatus(frequeyncyIntervalDays, lastCheckIn)
  }

  calculateFrequencyStatus(interval: number, lastCheckIn: string) {
    if (!this.lastCheckIn) return 'empty'

    const expectedCheckIn = new Date(Date.parse(lastCheckIn) + (interval * 24 * 60 * 60 * 1000)).toISOString();

    if (Date.now() > Date.parse(expectedCheckIn)) return 'late'
    else return 'on-track'
  }

}