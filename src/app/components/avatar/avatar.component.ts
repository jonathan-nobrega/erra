import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() name: string;
  @Input() isAvatar: boolean = true;
  @Input() isCustom: boolean = false;

  constructor() {}

  ngOnInit() {}
}
