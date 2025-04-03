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

  @Output() actionSheetEvent = new EventEmitter<string>()
  @Output() toastEvent = new EventEmitter<string>()

  constructor(private toastController: ToastController) { }

  ngOnInit() { }

  openActionSheet() {
    this.actionSheetEvent.emit(this.title)
  }

}