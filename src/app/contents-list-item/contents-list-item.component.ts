import {Component, Input, OnInit} from '@angular/core';
import {IContent} from "../models/icontent";

@Component({
  selector: 'app-contents-list-item',
  standalone: true,
  imports: [],
  templateUrl: './contents-list-item.component.html',
  styleUrl: './contents-list-item.component.scss'
})
export class ContentsListItemComponent implements OnInit{
  @Input() content: IContent | undefined;
  constructor() {
  }
  ngOnInit(): void {
  }
}
