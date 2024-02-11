import {Component, OnInit} from '@angular/core';
import {ContentsListItemComponent} from "../contents-list-item/contents-list-item.component";
import {NgForOf, NgStyle} from "@angular/common";
import {IContent} from "../models/icontent";


@Component({
  selector: 'app-contents-list',
  standalone: true,
  imports: [
    ContentsListItemComponent,
    NgStyle,
    NgForOf
  ],
  templateUrl: './contents-list.component.html',
  styleUrl: './contents-list.component.scss'
})
export class ContentsListComponent implements OnInit {

  footballPlayers?: IContent[] = [{
    name: 'Lionel Messi',
    imgSrc: 'https://superstarsbio.com/wp-content/uploads/2019/01/Lionel-Messi.jpg',
    club: 'Inter Miami',
    age: 36,
    country: 'Argentina'
  },
    {
      name: 'Cristiano Ronaldo',
      imgSrc: 'https://images5.alphacoders.com/929/thumb-1920-929995.jpg',
      club: 'AL-Nassir',
      age: 38,
      country: 'Portugal'
    },
    {
      name: 'Mo Salah',
      imgSrc: 'https://images.complex.com/complex/images/c_scale,q_auto,w_1920/fl_lossy,pg_1/utqcxtsztrz5gr8zfacs/mo-salah',
      club: 'Liverpool',
      age: 31,
      country: 'Egypt'
    },
    {
      name: 'Virgil',
      imgSrc: 'https://liverpoolcore.com/wp-content/uploads/2019/09/SEI_45152804-a2bf.jpg',
      club: 'Liverpool',
      age: 32,
      country: 'Netherlands'
    }];
  // {
  //   name : 'Lionel Messi',
  //   club: 'Inter Miami',
  //   age: 35,
  //   country: 'Argentina',
  // },
  // {
  //   name : 'Mo Salah',
  //   club: 'Liverpool',
  //   age: 30,
  //   country: 'Egypt',
  // },
  // {
  //   name : 'Cristiano Ronaldo',
  //   club: 'Alnaser',
  //   age: 38,
  //   country: 'Portugal',
  // },
  // {
  //   name : 'Halaand',
  //   club: 'Man City',
  //   age: 23,
  //   country: 'Norway',
  // },
  // ];

  constructor() {
  }

  ngOnInit(): void {
  //   this.footballPlayers = [{
  //     name: 'Lionel Messi',
  //     imgSrc: 'https://superstarsbio.com/wp-content/uploads/2019/01/Lionel-Messi.jpg',
  //     club: 'Inter Miami',
  //     age: 36,
  //     country: 'Argentina'
  //   },
  //     {
  //       name: 'Cristiano Ronaldo',
  //       imgSrc: 'https://images5.alphacoders.com/929/thumb-1920-929995.jpg',
  //       club: 'AL-Nassir',
  //       age: 38,
  //       country: 'Portugal'
  //     },
  //     {
  //       name: 'Mo Salah',
  //       imgSrc: 'https://images.complex.com/complex/images/c_scale,q_auto,w_1920/fl_lossy,pg_1/utqcxtsztrz5gr8zfacs/mo-salah',
  //       club: 'Liverpool',
  //       age: 31,
  //       country: 'Egypt'
  //     },
  //     {
  //       name: 'Cristiano Ronaldo',
  //       imgSrc: 'https://liverpoolcore.com/wp-content/uploads/2019/09/SEI_45152804-a2bf.jpg',
  //       club: 'Liverpool',
  //       age: 32,
  //       country: 'Netherlands'
  //     }
  //   ];
  }
}
