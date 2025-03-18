import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
  standalone: false
})
export class ListCardComponent  implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {}

  handleClick(): void {
    console.log("clicked")

  }

}
