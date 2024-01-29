import {Component, OnInit} from '@angular/core';
import {IContent} from "../models/icontent";
import {ContentsListItemComponent} from "../contents-list-item/contents-list-item.component";


@Component({
  selector: 'app-contents-list',
  standalone: true,
  imports: [
    ContentsListItemComponent
  ],
  templateUrl: './contents-list.component.html',
  styleUrl: './contents-list.component.scss'
})
export class ContentsListComponent implements OnInit{

  footballPlayers: IContent[] = [
    {
      name : 'Lionel Messi',
      club: 'Inter Miami',
      age: 35,
      country: 'Argentina',
    },
    {
      name : 'Mo Salah',
      club: 'Liverpool',
      age: 30,
      country: 'Egypt',
    },
    {
      name : 'Cristiano Ronaldo',
      club: 'Alnaser',
      age: 38,
      country: 'Portugal',
    },
    {
      name : 'Halaand',
      club: 'Man City',
      age: 23,
      country: 'Norway',
    },
    ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
