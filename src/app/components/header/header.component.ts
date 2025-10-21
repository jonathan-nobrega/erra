import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, AvatarComponent],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
