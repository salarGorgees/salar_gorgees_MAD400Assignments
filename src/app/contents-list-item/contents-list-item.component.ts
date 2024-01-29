import {Component, Input, OnInit} from '@angular/core';
import {IContent} from "../models/icontent";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-contents-list-item',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './contents-list-item.component.html',
  styleUrl: './contents-list-item.component.scss'
})
export class ContentsListItemComponent implements OnInit{
  @Input() content?: IContent;
  constructor() {
  }
  ngOnInit(): void {
  }
}
