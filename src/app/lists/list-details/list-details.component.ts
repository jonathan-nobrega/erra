import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.listId = parseInt(this.route.snapshot.paramMap.get('id')!)

      this.listDetails = this.listData.find(a => a.id === this.listId)

      this.choresList = this.listDetails?.chores || []

      this.choresCount = this.choresList.length

      this.choresCompleted =  Math.round(0.2 * this.choresCount)
  }

}
